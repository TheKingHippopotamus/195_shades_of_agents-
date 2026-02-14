"""NEXUS AI Mission Control — FastAPI Application"""

import asyncio
from contextlib import asynccontextmanager

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from .config import STATIC_DIR, TEMPLATES_DIR
from .agent_loader import load_all_agents
from .message_bus import MessageBus
from .session_monitor import SessionMonitor
from .routes import agents, messages, missions, websocket, dashboard


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Startup / shutdown lifecycle for the application."""
    # -- Startup ------------------------------------------------
    # 1. Load all 195 agent profiles from disk
    app.state.agents = load_all_agents()

    # 2. Create message bus for real-time event distribution
    app.state.bus = MessageBus()

    # 3. Create and start session monitor
    app.state.monitor = SessionMonitor(bus=app.state.bus, agents=app.state.agents)
    monitor_task = asyncio.create_task(app.state.monitor.start())

    yield

    # -- Shutdown -----------------------------------------------
    await app.state.monitor.stop()
    monitor_task.cancel()
    try:
        await monitor_task
    except asyncio.CancelledError:
        pass


# -- Create FastAPI app ----------------------------------------
app = FastAPI(
    title="NEXUS AI Mission Control",
    description="Real-time communication monitor for 195 autonomous AI agents",
    version="1.0.0",
    lifespan=lifespan,
)

# -- CORS (allow all origins for development) ------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -- Mount static files ----------------------------------------
app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")

# -- Templates -------------------------------------------------
templates = Jinja2Templates(directory=str(TEMPLATES_DIR))

# -- Include routers -------------------------------------------
app.include_router(agents.router)
app.include_router(messages.router)
app.include_router(missions.router)
app.include_router(websocket.router)
app.include_router(dashboard.router)


# -- Root route ------------------------------------------------
@app.get("/", response_class=HTMLResponse)
async def root(request: Request):
    """Serve the main Mission Control dashboard."""
    return templates.TemplateResponse("index.html", {"request": request})

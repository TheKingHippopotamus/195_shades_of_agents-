"""NEXUS AI Mission Control — WebSocket Feed"""

from fastapi import APIRouter, WebSocket, WebSocketDisconnect

router = APIRouter()


@router.websocket("/ws/feed")
async def ws_feed(websocket: WebSocket):
    """Real-time event feed via WebSocket.

    On connect, sends an initial stats snapshot. Then keeps the connection
    open to relay message-bus events. The client may send text frames for
    future filter commands.
    """
    bus = websocket.app.state.bus
    await websocket.accept()
    await bus.connect(websocket)
    try:
        # Send initial stats snapshot
        stats = bus.get_stats()
        await websocket.send_json({"event": "stats", "data": stats.model_dump()})

        # Keep connection open, listen for client commands
        while True:
            data = await websocket.receive_text()
            # Future: handle filter commands from client
    except WebSocketDisconnect:
        bus.disconnect(websocket)

/* ================================================================
   NEXUS AI MISSION CONTROL — Main Application Controller
   Initializes all components, wires up events, manages views
   ================================================================ */

class NexusApp {
    constructor() {
        /** @type {object} Agent profiles map: code -> AgentProfile */
        this.agents = {};

        /** @type {NexusWebSocket} */
        this.ws = null;

        /** @type {MessageFeed} */
        this.messageFeed = null;

        /** @type {AgentCard} */
        this.agentCard = null;

        /** @type {SessionPanel} */
        this.sessionPanel = null;

        /** @type {StatsBar} */
        this.statsBar = null;

        /** @type {DeptSidebar} */
        this.deptSidebar = null;

        /** @type {CommandPalette} */
        this.commandPalette = null;

        /** @type {TeleportView} */
        this.teleportView = null;

        /** @type {string|null} Agent code currently teleported into */
        this.teleportedAgent = null;

        /** @type {string} Current view: 'feed', 'missions', or 'teleport' */
        this.currentView = 'feed';

        /** @type {Array} Last N messages for the ticker */
        this.tickerMessages = [];
        this.maxTickerMessages = 10;

        // Department config (mirrors config.py)
        this.DEPARTMENTS = [
            { id: 'exec',    name: 'Executive Leadership',     color: '#6366f1', range: [1, 11] },
            { id: 'eng',     name: 'Engineering',               color: '#8b5cf6', range: [12, 51] },
            { id: 'infra',   name: 'Platform & Infrastructure', color: '#22d3ee', range: [52, 63] },
            { id: 'product', name: 'Product Management',        color: '#f59e0b', range: [64, 73] },
            { id: 'design',  name: 'Design',                    color: '#f97316', range: [74, 87] },
            { id: 'aiml',    name: 'Data Science & AI/ML',      color: '#06b6d4', range: [88, 99] },
            { id: 'qa',      name: 'Quality Assurance',         color: '#10b981', range: [100, 107] },
            { id: 'sec',     name: 'Security',                  color: '#ef4444', range: [108, 115] },
            { id: 'sales',   name: 'Sales & Revenue',           color: '#3b82f6', range: [116, 125] },
            { id: 'mkt',     name: 'Marketing',                 color: '#ec4899', range: [126, 134] },
            { id: 'cs',      name: 'Customer Success & Support', color: '#14b8a6', range: [135, 142] },
            { id: 'people',  name: 'People / HR',               color: '#a855f7', range: [143, 149] },
            { id: 'finance', name: 'Finance & Accounting',      color: '#84cc16', range: [150, 156] },
            { id: 'legal',   name: 'Legal & Compliance',        color: '#f43f5e', range: [157, 163] },
            { id: 'it',      name: 'IT & Operations',           color: '#94a3b8', range: [164, 168] },
            { id: 'devrel',  name: 'Developer Relations',       color: '#fb923c', range: [169, 173] },
            { id: 'pmo',     name: 'Program Management',        color: '#facc15', range: [174, 177] },
            { id: 'gov',     name: 'Governance',                color: '#fbbf24', range: [181, 186] },
            { id: 'special', name: 'Special Agents',            color: '#f472b6', range: [187, 195] },
            { id: 'docs',    name: 'Documentation',             color: '#a3e635', range: [178, 180] },
        ];
    }

    /* -- Initialization ------------------------------------------------- */

    async init() {
        console.log('[NexusApp] Initializing...');

        try {
            // 1. Fetch all agents
            await this._fetchAgents();

            // 2. Create component instances
            this._createComponents();

            // 3. Initialize sidebar with departments and agents
            this.deptSidebar.init(this.DEPARTMENTS, this.agents);

            // Ensure message feed has agents for dept filtering
            this.messageFeed.setAgents(this.agents);

            // 4. Wire up event handlers
            this._wireEvents();

            // 5. Fetch initial data in parallel
            await Promise.all([
                this._fetchInitialStats(),
                this._fetchInitialSession(),
                this._fetchInitialMessages(),
            ]);

            // 6. Connect WebSocket
            this._connectWebSocket();

            // 7. Set up view switching
            this._setupViewTabs();

            // 8. Set up teleport (command palette + teleport view)
            this._setupTeleport();

            // 9. Set up keyboard shortcuts
            this._setupKeyboard();

            console.log('[NexusApp] Initialization complete');
        } catch (err) {
            console.error('[NexusApp] Initialization failed:', err);
        }
    }

    /* -- Data Fetching -------------------------------------------------- */

    async _fetchAgents() {
        try {
            const response = await fetch('/api/agents');
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const agentsList = await response.json();

            this.agents = {};
            agentsList.forEach(agent => {
                this.agents[agent.code] = agent;
            });

            console.log(`[NexusApp] Loaded ${Object.keys(this.agents).length} agents`);
        } catch (err) {
            console.error('[NexusApp] Failed to fetch agents:', err);
        }
    }

    async _fetchInitialStats() {
        try {
            const response = await fetch('/api/stats');
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const stats = await response.json();
            this.statsBar.update(stats);
        } catch (err) {
            console.error('[NexusApp] Failed to fetch stats:', err);
        }
    }

    async _fetchInitialSession() {
        try {
            await this.sessionPanel.load();
        } catch (err) {
            console.error('[NexusApp] Failed to fetch session:', err);
        }
    }

    async _fetchInitialMessages() {
        try {
            const response = await fetch('/api/messages?limit=50');
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();

            // Events come newest-first from API; feed.addMessage prepends,
            // so reverse to add oldest first and end up with newest on top
            const events = data.events || [];
            const reversed = [...events].reverse();

            reversed.forEach(msg => {
                this.messageFeed.addMessage(msg);
                this._addToTicker(msg);
            });
        } catch (err) {
            console.error('[NexusApp] Failed to fetch initial messages:', err);
        }
    }

    /* -- Component Creation --------------------------------------------- */

    _createComponents() {
        // Message Feed
        const feedEl = document.getElementById('message-feed');
        this.messageFeed = new MessageFeed(feedEl, this.agents, this.DEPARTMENTS);

        // Agent Card (detail panel)
        const detailEl = document.getElementById('detail-panel');
        this.agentCard = new AgentCard(detailEl);

        // Session Panel
        const missionEl = document.getElementById('mission-board');
        this.sessionPanel = new SessionPanel(missionEl);

        // Cost Panel
        this.costPanel = new CostPanel(missionEl);

        // Stats Bar
        const statsEl = document.getElementById('stats-bar');
        this.statsBar = new StatsBar(statsEl);

        // Department Sidebar
        const sidebarEl = document.getElementById('dept-sidebar');
        this.deptSidebar = new DeptSidebar(sidebarEl);

        // Teleport View
        const teleportEl = document.getElementById('teleport-view');
        this.teleportView = new TeleportView(teleportEl);

        // Command Palette
        const paletteEl = document.getElementById('command-palette-overlay');
        this.commandPalette = new CommandPalette(paletteEl, this.agents);
    }

    /* -- Event Wiring --------------------------------------------------- */

    _wireEvents() {
        // Department sidebar filter
        this.deptSidebar.onFilter((deptId) => {
            this.messageFeed.setFilter(deptId);
        });

        // Agent clicks from sidebar
        this.deptSidebar.onAgentClick((code) => {
            this.agentCard.show(code);
        });

        // Agent clicks from message feed
        this.messageFeed.onAgentClick((code) => {
            this.agentCard.show(code);
        });

        // Search input with debounce
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            let searchTimeout = null;
            searchInput.addEventListener('input', () => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    this.messageFeed.setSearch(searchInput.value || null);
                }, 300);
            });
        }
    }

    /* -- WebSocket ------------------------------------------------------- */

    _connectWebSocket() {
        this.ws = NexusWebSocket.getInstance();

        // Handle new session events
        this.ws.onMessage('session_event', (data) => {
            this.messageFeed.addMessage(data);
            this._addToTicker(data);
            this._updateTickerDOM();

            // Route to teleport view if active
            if (this.teleportedAgent && this.teleportView) {
                this.teleportView.handleMessage(data);
            }
        });

        // Handle stats updates
        this.ws.onMessage('stats', (data) => {
            this.statsBar.update(data);

            // Update sidebar active counts if we have active_agents list
            if (data.active_agent_codes) {
                this.deptSidebar.updateCounts(data.active_agent_codes);
            }

            // Update cost panel
            if (this.costPanel) {
                this.costPanel.update(data);
            }
        });

        // Connect
        this.ws.connect();

        // Connection indicator
        const connDot = document.querySelector('[data-ws-status]');
        if (connDot) {
            this.ws.onMessage('*', () => {
                connDot.setAttribute('data-ws-status', 'connected');
            });
        }
    }

    /* -- View Switching ------------------------------------------------- */

    _setupViewTabs() {
        const tabs = document.querySelectorAll('.tab[data-view]');
        const views = document.querySelectorAll('.view');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const viewName = tab.getAttribute('data-view');

                // Exit teleport if active
                if (this.teleportedAgent) {
                    this.teleportedAgent = null;
                    this.teleportView.deactivate();
                    const subtitle = document.querySelector('.header__subtitle');
                    if (subtitle) {
                        subtitle.textContent = this._originalSubtitle || 'MISSION CONTROL';
                        subtitle.style.color = '';
                    }
                }

                this.currentView = viewName;

                // Update tab states
                tabs.forEach(t => t.classList.remove('tab--active'));
                tab.classList.add('tab--active');

                // Show/hide views
                views.forEach(view => {
                    if (view.id === `${viewName === 'feed' ? 'message-feed' : 'mission-board'}`) {
                        view.classList.add('view--active');
                    } else {
                        view.classList.remove('view--active');
                    }
                });

                // Reload session when switching to session view
                if (viewName === 'missions') {
                    this.sessionPanel.load();
                }
            });
        });
    }

    /* -- Teleport Feature ------------------------------------------------ */

    _setupTeleport() {
        // Wire command palette selection
        this.commandPalette.onSelect((code) => {
            this.teleportTo(code);
        });

        // Wire teleport view exit
        this.teleportView.onExit(() => {
            this.exitTeleport();
        });

        // Wire teleport view agent clicks (teleport to another agent)
        this.teleportView.onAgentClick((code) => {
            this.teleportTo(code);
        });

        // Header teleport button
        const teleportBtn = document.getElementById('teleport-btn');
        if (teleportBtn) {
            teleportBtn.addEventListener('click', () => {
                this.commandPalette.toggle();
            });
        }
    }

    _setupKeyboard() {
        document.addEventListener('keydown', (e) => {
            // Ctrl+K or Cmd+K -- open command palette
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.commandPalette.toggle();
                return;
            }

            // ESC -- close palette or exit teleport
            if (e.key === 'Escape') {
                if (this.commandPalette.isOpen) {
                    this.commandPalette.close();
                } else if (this.teleportedAgent) {
                    this.exitTeleport();
                }
            }
        });
    }

    /**
     * Teleport into an agent's first-person perspective.
     * @param {string} code - Agent code.
     */
    async teleportTo(code) {
        console.log(`[NexusApp] Teleporting into ${code}`);
        this.teleportedAgent = code;

        // Hide all current views
        const views = document.querySelectorAll('.view');
        views.forEach(v => v.classList.remove('view--active'));

        // Deactivate view tabs
        const tabs = document.querySelectorAll('.tab[data-view]');
        tabs.forEach(t => t.classList.remove('tab--active'));

        // Activate teleport view
        await this.teleportView.activate(code);

        // Update header subtitle
        const subtitle = document.querySelector('.header__subtitle');
        if (subtitle) {
            this._originalSubtitle = subtitle.textContent;
            const agent = this.agents[code.toUpperCase()];
            const nick = agent?.personal?.nickname || code;
            subtitle.textContent = `TELEPORTED: ${nick}`;
            subtitle.style.color = 'var(--accent2)';
        }
    }

    /**
     * Exit teleport mode and return to the previous view.
     */
    exitTeleport() {
        if (!this.teleportedAgent) return;
        console.log('[NexusApp] Exiting teleport');

        this.teleportedAgent = null;
        this.teleportView.deactivate();

        // Restore the feed view
        const feedView = document.getElementById('message-feed');
        if (feedView) feedView.classList.add('view--active');

        // Re-activate the feed tab
        const tabs = document.querySelectorAll('.tab[data-view]');
        tabs.forEach(t => {
            if (t.getAttribute('data-view') === 'feed') {
                t.classList.add('tab--active');
            }
        });

        this.currentView = 'feed';

        // Restore header subtitle
        const subtitle = document.querySelector('.header__subtitle');
        if (subtitle) {
            subtitle.textContent = this._originalSubtitle || 'MISSION CONTROL';
            subtitle.style.color = '';
        }
    }

    /* -- Bottom Ticker -------------------------------------------------- */

    /**
     * Add a message to the ticker queue.
     * @param {object} msg
     */
    _addToTicker(msg) {
        this.tickerMessages.unshift(msg);
        if (this.tickerMessages.length > this.maxTickerMessages) {
            this.tickerMessages = this.tickerMessages.slice(0, this.maxTickerMessages);
        }
    }

    /**
     * Rebuild the ticker DOM from the current message queue.
     */
    _updateTickerDOM() {
        const track = document.getElementById('ticker-track');
        if (!track) return;

        const TYPE_COLORS = {
            thinking: '#a855f7', text: '#6366f1', tool_call: '#22d3ee',
            tool_result: '#10b981', user_msg: '#f59e0b', system: '#6b7280', file_change: '#14b8a6'
        };

        const items = this.tickerMessages.map(msg => {
            const color = TYPE_COLORS[msg.type] || '#6366f1';
            const label = msg.type === 'tool_call' ? (msg.tool_name || 'TOOL') : msg.type.toUpperCase();
            return `<span class="ticker__item">
                <span class="ticker__item-type" style="background:${color}22;color:${color}">${label}</span>
                ${this._escapeHtml(msg.subject || '')}
            </span>`;
        });

        // Duplicate for seamless scrolling
        const content = items.join('') + items.join('');

        track.innerHTML = `<span class="ticker__status">NEXUS AI SESSION MONITOR \u2014 LIVE</span>${content}`;

        // Reset animation
        track.style.animation = 'none';
        track.offsetHeight; // Force reflow
        const duration = Math.max(30, this.tickerMessages.length * 8);
        track.style.animation = `tickerScroll ${duration}s linear infinite`;
    }

    /**
     * Escape HTML to prevent XSS.
     * @param {string} str
     * @returns {string}
     */
    _escapeHtml(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
}


/* -- Bootstrap ---------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const app = new NexusApp();
    app.init();

    // Make accessible for debugging
    window.nexusApp = app;
});

/* ================================================================
   NEXUS AI MISSION CONTROL — Message Feed Component
   Real-time scrolling session event log
   ================================================================ */

class MessageFeed {
    /**
     * @param {HTMLElement} container - The #message-feed element.
     */
    constructor(container, agents, departments) {
        this.container = container;
        this.messages = [];
        this.maxMessages = 200;
        this.autoScroll = true;
        this.filter = null; // null = show all, string = event type
        this.filterType = null; // 'event_type' | 'dept' | null
        this.agents = agents || {};
        this.departments = departments || [];
        this.searchQuery = null;

        /** @type {Function|null} */
        this._onAgentClick = null;

        this._init();
    }

    /* -- Initialization ------------------------------------------------- */

    _init() {
        // Create message list container
        this.list = document.createElement('div');
        this.list.className = 'message-feed__list';
        this.container.appendChild(this.list);

        // Create auto-scroll toggle button
        this.scrollBtn = document.createElement('button');
        this.scrollBtn.className = 'autoscroll-btn autoscroll-btn--active';
        this.scrollBtn.innerHTML = '<span class="autoscroll-btn__dot"></span>AUTO-SCROLL';
        this.scrollBtn.addEventListener('click', () => {
            this.setAutoScroll(!this.autoScroll);
        });
        this.container.appendChild(this.scrollBtn);

        // Detect manual scroll to pause auto-scroll
        this.container.addEventListener('scroll', () => {
            if (!this._programmaticScroll) {
                if (this.container.scrollTop > 40) {
                    this.setAutoScroll(false);
                }
            }
        });
    }

    /* -- Public Methods ------------------------------------------------- */

    /**
     * Add a new message to the feed.
     * @param {object} msg - SessionEvent data from the API/WebSocket.
     */
    addMessage(msg) {
        this.messages.unshift(msg);

        // Enforce max messages in memory
        if (this.messages.length > this.maxMessages) {
            this.messages = this.messages.slice(0, this.maxMessages);
        }

        // Check if message passes current filter
        if (this._passesFilter(msg)) {
            const card = this._createMessageCard(msg);
            this.list.prepend(card);

            // Remove excess DOM nodes
            while (this.list.children.length > this.maxMessages) {
                this.list.removeChild(this.list.lastChild);
            }

            // Auto-scroll to top (newest first)
            if (this.autoScroll) {
                this._programmaticScroll = true;
                this.container.scrollTop = 0;
                requestAnimationFrame(() => {
                    this._programmaticScroll = false;
                });
            }
        }
    }

    /**
     * Clear all messages from the feed.
     */
    clear() {
        this.messages = [];
        this.list.innerHTML = '';
    }

    /**
     * Toggle auto-scroll behavior.
     * @param {boolean} enabled
     */
    setAutoScroll(enabled) {
        this.autoScroll = enabled;
        this.scrollBtn.classList.toggle('autoscroll-btn--active', enabled);
    }

    /**
     * Set a filter. Pass null to show all.
     * @param {string|null} filterValue
     */
    setFilter(filterValue) {
        this.filter = filterValue;
        if (!filterValue) {
            this.filterType = null;
        } else {
            const eventTypes = ['thinking', 'text', 'tool_call', 'tool_result', 'user_msg', 'system', 'file_change'];
            this.filterType = eventTypes.includes(filterValue) ? 'event_type' : 'dept';
        }
        this._rebuildList();
    }

    /**
     * Register callback for when an agent code is clicked.
     * @param {Function} callback - Receives the agent code string.
     */
    onAgentClick(callback) {
        this._onAgentClick = callback;
    }

    /**
     * Update agents map (called after initial fetch).
     * @param {object} agents
     */
    setAgents(agents) {
        this.agents = agents || {};
    }

    /**
     * Set search query filter.
     * @param {string|null} query
     */
    setSearch(query) {
        this.searchQuery = query ? query.trim() : null;
        this._rebuildList();
    }

    /* -- Private: DOM Construction -------------------------------------- */

    /**
     * Create a message card DOM element.
     * @param {object} msg
     * @returns {HTMLElement}
     */
    _createMessageCard(msg) {
        const card = document.createElement('div');
        const eventClass = `event--${msg.type}`;
        card.className = `msg-card ${eventClass} animate-slide-in`;

        // Event type config
        const EVENT_CONFIG = {
            thinking:    { label: 'THINKING', icon: '\u{1F9E0}', color: '#a855f7' },
            text:        { label: 'CLAUDE', icon: '\u{1F4AC}', color: '#6366f1' },
            tool_call:   { label: msg.tool_name || 'TOOL', icon: '\u{1F527}', color: '#22d3ee' },
            tool_result: { label: 'RESULT', icon: '\u2705', color: '#10b981' },
            user_msg:    { label: 'USER', icon: '\u{1F464}', color: '#f59e0b' },
            system:      { label: 'SYSTEM', icon: '\u2699\uFE0F', color: '#6b7280' },
            file_change: { label: 'FILE', icon: '\u{1F4C4}', color: '#14b8a6' },
        };
        const config = EVENT_CONFIG[msg.type] || EVENT_CONFIG.system;

        // Header with badge
        const header = document.createElement('div');
        header.className = 'msg-card__header';

        const badge = document.createElement('span');
        badge.className = 'msg-card__event-badge';
        badge.style.background = config.color + '22';
        badge.style.color = config.color;
        badge.textContent = `${config.icon} ${config.label}`;
        header.appendChild(badge);

        // Show tool name as separate badge for tool_call
        if (msg.type === 'tool_call' && msg.tool_name) {
            const toolBadge = document.createElement('span');
            toolBadge.className = 'msg-card__tool-badge';
            toolBadge.textContent = msg.tool_name;
            header.appendChild(toolBadge);
        }

        // Show file path if available
        if (msg.file_path) {
            const filePath = document.createElement('span');
            filePath.className = 'msg-card__file-path';
            filePath.textContent = msg.file_path;
            header.appendChild(filePath);
        }

        card.appendChild(header);

        // Subject line
        if (msg.subject) {
            const subject = document.createElement('div');
            subject.className = 'msg-card__subject';
            subject.textContent = msg.subject;
            card.appendChild(subject);
        }

        // Body - render as code block for tool_call and tool_result (with collapse/expand)
        if (msg.type === 'tool_call' && msg.tool_input && Object.keys(msg.tool_input).length > 0) {
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'msg-card__expand-toggle';
            toggleBtn.textContent = '\u25B6 Show input';
            const codeBlock = document.createElement('div');
            codeBlock.className = 'msg-card__code-block msg-card__code-block--collapsed';
            const pre = document.createElement('pre');
            const code = document.createElement('code');
            code.textContent = JSON.stringify(msg.tool_input, null, 2);
            pre.appendChild(code);
            codeBlock.appendChild(pre);
            toggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const collapsed = codeBlock.classList.toggle('msg-card__code-block--collapsed');
                toggleBtn.textContent = collapsed ? '\u25B6 Show input' : '\u25BC Hide input';
            });
            card.appendChild(toggleBtn);
            card.appendChild(codeBlock);
        } else if (msg.type === 'tool_result' && msg.body) {
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'msg-card__expand-toggle';
            toggleBtn.textContent = '\u25B6 Show result';
            const codeBlock = document.createElement('div');
            codeBlock.className = 'msg-card__code-block msg-card__code-block--collapsed';
            const pre = document.createElement('pre');
            const code = document.createElement('code');
            const bodyText = msg.body.length > 1000 ? msg.body.substring(0, 1000) + '\n... (truncated)' : msg.body;
            code.textContent = bodyText;
            pre.appendChild(code);
            codeBlock.appendChild(pre);
            toggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const collapsed = codeBlock.classList.toggle('msg-card__code-block--collapsed');
                toggleBtn.textContent = collapsed ? '\u25B6 Show result' : '\u25BC Hide result';
            });
            card.appendChild(toggleBtn);
            card.appendChild(codeBlock);
        } else if (msg.body) {
            const body = document.createElement('div');
            body.className = 'msg-card__body';
            body.textContent = msg.body;
            card.appendChild(body);
        }

        // Thinking section (collapsible) for thinking type
        if (msg.type === 'thinking' && msg.thinking) {
            const thinkingToggle = document.createElement('button');
            thinkingToggle.className = 'msg-card__thinking-toggle';
            thinkingToggle.innerHTML = '\u{1F9E0} FULL THOUGHT';
            const thinkingContent = document.createElement('div');
            thinkingContent.className = 'msg-card__thinking';
            thinkingContent.textContent = msg.thinking;
            thinkingToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                thinkingContent.classList.toggle('msg-card__thinking--open');
            });
            card.appendChild(thinkingToggle);
            card.appendChild(thinkingContent);
        }

        // Footer
        const footer = document.createElement('div');
        footer.className = 'msg-card__footer';

        if (msg.from_code) {
            const from = document.createElement('span');
            from.className = 'msg-card__dept';
            from.textContent = msg.from_code;
            footer.appendChild(from);
        }

        if (msg.model) {
            const model = document.createElement('span');
            model.className = 'msg-card__thread';
            model.textContent = msg.model;
            footer.appendChild(model);
        }

        // Token count
        if (msg.input_tokens || msg.output_tokens) {
            const tokens = document.createElement('span');
            tokens.className = 'msg-card__dept';
            tokens.textContent = `${(msg.input_tokens||0) + (msg.output_tokens||0)} tok`;
            footer.appendChild(tokens);
        }

        const time = document.createElement('span');
        time.className = 'msg-card__time';
        time.textContent = this._formatTimestamp(msg.timestamp);
        footer.appendChild(time);

        card.appendChild(footer);
        return card;
    }

    /**
     * Format a timestamp for display.
     * @param {string} ts - ISO timestamp string.
     * @returns {string}
     */
    _formatTimestamp(ts) {
        if (!ts) return '';
        try {
            const date = new Date(ts);
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');
            return `${hours}:${minutes}:${seconds}`;
        } catch {
            return '';
        }
    }

    /**
     * Check if a message passes the current filter.
     * @param {object} msg
     * @returns {boolean}
     */
    _passesFilter(msg) {
        // Type or department filter
        if (this.filter) {
            if (this.filterType === 'event_type') {
                if (msg.type !== this.filter) return false;
            } else if (this.filterType === 'dept') {
                if (!msg.from_code) return false;
                const agent = this.agents[msg.from_code];
                if (!agent || agent.department_id !== this.filter) return false;
            }
        }
        // Search filter
        if (this.searchQuery) {
            const q = this.searchQuery.toLowerCase();
            const haystack = `${msg.subject || ''} ${msg.body || ''} ${msg.tool_name || ''}`.toLowerCase();
            if (!haystack.includes(q)) return false;
        }
        return true;
    }

    /**
     * Rebuild the message list (used after filter changes).
     */
    _rebuildList() {
        this.list.innerHTML = '';
        const filtered = this.messages.filter(msg => this._passesFilter(msg));
        const toShow = filtered.slice(0, this.maxMessages);

        if (toShow.length === 0 && (this.filter || this.searchQuery)) {
            // Show empty state when filtering/searching returns no results
            const empty = document.createElement('div');
            empty.className = 'feed-empty';
            empty.innerHTML = `
                <div class="feed-empty__icon">🔍</div>
                <div class="feed-empty__title">No activity found</div>
                <div class="feed-empty__message">
                    ${this.filter && this.filterType === 'dept'
                        ? 'No events from agents in this department yet.<br>Events appear when agents reference their files.'
                        : this.searchQuery
                        ? `No events matching "${this.searchQuery}"`
                        : 'No events match the current filter.'}
                </div>
            `;
            this.list.appendChild(empty);
            return;
        }

        toShow.forEach(msg => {
            const card = this._createMessageCard(msg);
            card.classList.remove('animate-slide-in'); // Don't animate on rebuild
            this.list.appendChild(card);
        });
    }
}

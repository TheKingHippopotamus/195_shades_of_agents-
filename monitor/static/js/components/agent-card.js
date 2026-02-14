/* ================================================================
   NEXUS AI MISSION CONTROL — Agent Card Component
   Agent profile display in the detail panel
   ================================================================ */

class AgentCard {
    /**
     * @param {HTMLElement} container - The #detail-panel element.
     */
    constructor(container) {
        this.container = container;
        this.currentCode = null;

        /** @type {object|null} */
        this._originalContent = null;

        // Store original content for restore on hide
        this._emptyHTML = container.innerHTML;
    }

    /* ── Public Methods ───────────────────────────────────────── */

    /**
     * Fetch and display an agent profile.
     * @param {string} agentCode - Agent code (e.g., "CEO", "SR-FE-REACT").
     */
    async show(agentCode) {
        if (!agentCode) return;

        this.currentCode = agentCode.toUpperCase();

        // Show loading state
        this.container.innerHTML = `
            <div class="agent-card animate-fade-in">
                <div class="empty-state">
                    <div class="empty-state__icon animate-spin">\u25C8</div>
                    <p class="empty-state__text">Loading ${this.currentCode}...</p>
                </div>
            </div>
        `;

        try {
            // Fetch agent profile
            const response = await fetch(`/api/agents/${encodeURIComponent(agentCode)}`);
            if (!response.ok) {
                throw new Error(`Agent "${agentCode}" not found`);
            }
            const agent = await response.json();

            // Fetch recent messages
            let recentMessages = [];
            try {
                const msgResponse = await fetch(`/api/agents/${encodeURIComponent(agentCode)}/messages?limit=5`);
                if (msgResponse.ok) {
                    recentMessages = await msgResponse.json();
                }
            } catch {
                // Silently ignore message fetch errors
            }

            // Only render if this is still the current agent (avoid race conditions)
            if (this.currentCode === agentCode.toUpperCase()) {
                this._render(agent, recentMessages);
            }
        } catch (err) {
            console.error('[AgentCard] Error loading agent:', err);
            this.container.innerHTML = `
                <div class="agent-card animate-fade-in">
                    <div class="empty-state">
                        <div class="empty-state__icon">\u2716</div>
                        <p class="empty-state__text">${err.message}</p>
                    </div>
                </div>
            `;
        }

        // On smaller screens, open the panel
        this.container.classList.add('detail-panel--open');
    }

    /**
     * Hide the agent profile and restore the empty state.
     */
    hide() {
        this.currentCode = null;
        this.container.innerHTML = this._emptyHTML;
        this.container.classList.remove('detail-panel--open');
    }

    /* ── Private Methods ──────────────────────────────────────── */

    /**
     * Get display initials from an agent code.
     * @param {string} code
     * @returns {string}
     */
    _getInitials(code) {
        if (!code) return '?';
        const parts = code.split('-');
        if (parts.length === 1) {
            return code.substring(0, 2).toUpperCase();
        }
        return parts.map(p => p[0]).join('').substring(0, 3).toUpperCase();
    }

    /**
     * Render the full agent profile.
     * @param {object} agent - AgentProfile data.
     * @param {Array} recentMessages - Recent messages involving this agent.
     */
    _render(agent, recentMessages) {
        const initials = this._getInitials(agent.code);
        const deptColor = agent.department_color || '#6366f1';
        const personal = agent.personal || {};
        const isActive = agent.status === 'active';

        let html = `<div class="agent-card animate-fade-in">`;

        // Close button
        html += `<button class="detail-panel__close" id="agent-card-close" title="Close">\u2715</button>`;

        // Header: avatar + name
        html += `
            <div class="agent-card__header">
                <div class="agent-card__avatar" style="background: ${deptColor}">
                    ${initials}
                    <span class="agent-card__status ${isActive ? 'agent-card__status--active' : 'agent-card__status--idle'}"></span>
                </div>
                <div class="agent-card__info">
                    <div class="agent-card__nickname">${this._escapeHtml(personal.nickname || agent.code)}</div>
                    <div class="agent-card__role">${this._escapeHtml(agent.role)}</div>
                </div>
            </div>
        `;

        // Stats grid
        html += `
            <div class="agent-card__stats">
                <div class="agent-card__stat">
                    <div class="agent-card__stat-label">Agent #</div>
                    <div class="agent-card__stat-value">${String(agent.agent_number).padStart(3, '0')}</div>
                </div>
                <div class="agent-card__stat">
                    <div class="agent-card__stat-label">Tier</div>
                    <div class="agent-card__stat-value">${this._escapeHtml(agent.tier || 'N/A')}</div>
                </div>
                <div class="agent-card__stat">
                    <div class="agent-card__stat-label">Department</div>
                    <div class="agent-card__stat-value">${this._escapeHtml(agent.department || 'N/A')}</div>
                </div>
                <div class="agent-card__stat">
                    <div class="agent-card__stat-label">Age</div>
                    <div class="agent-card__stat-value">${personal.age || 'N/A'}</div>
                </div>
            </div>
        `;

        // Code + Reports To
        html += `
            <div class="agent-card__stats">
                <div class="agent-card__stat">
                    <div class="agent-card__stat-label">Code</div>
                    <div class="agent-card__stat-value" style="color: var(--accent2)">${this._escapeHtml(agent.code)}</div>
                </div>
                <div class="agent-card__stat">
                    <div class="agent-card__stat-label">Reports To</div>
                    <div class="agent-card__stat-value">${this._escapeHtml(agent.reports_to || 'N/A')}</div>
                </div>
            </div>
        `;

        // Personal sections
        const personalSections = [
            { key: 'about_me', label: 'About Me' },
            { key: 'what_i_bring', label: 'What I Bring' },
            { key: 'my_strengths', label: 'Strengths' },
            { key: 'my_weaknesses', label: 'Weaknesses' },
            { key: 'working_with_me', label: 'Working With Me' },
        ];

        personalSections.forEach(({ key, label }) => {
            const text = personal[key];
            if (text) {
                html += `
                    <div class="agent-card__section">
                        <div class="agent-card__section-title">${label}</div>
                        <div class="agent-card__section-text">${this._escapeHtml(text)}</div>
                    </div>
                `;
            }
        });

        // Personality snippet
        if (agent.personality_snippet) {
            html += `
                <div class="agent-card__section">
                    <div class="agent-card__section-title">Personality</div>
                    <div class="agent-card__section-text">${this._escapeHtml(agent.personality_snippet)}</div>
                </div>
            `;
        }

        // Recent messages
        if (recentMessages && recentMessages.length > 0) {
            html += `
                <div class="agent-card__messages">
                    <div class="agent-card__messages-title">Recent Messages</div>
            `;

            recentMessages.forEach(msg => {
                const direction = msg.from_code.toUpperCase() === agent.code.toUpperCase() ? '\u2192' : '\u2190';
                const otherCode = msg.from_code.toUpperCase() === agent.code.toUpperCase() ? msg.to_code : msg.from_code;
                const time = this._formatTime(msg.timestamp);

                html += `
                    <div class="agent-card__msg-mini">
                        <span class="badge badge--${msg.type.toLowerCase()}" style="font-size:0.55rem">${msg.type}</span>
                        ${direction} <strong>${this._escapeHtml(otherCode)}</strong>: ${this._escapeHtml(msg.subject || '')}
                        <span class="text-muted" style="float:right;font-size:0.65rem">${time}</span>
                    </div>
                `;
            });

            html += `</div>`;
        }

        html += `</div>`;

        this.container.innerHTML = html;

        // Attach close button handler
        const closeBtn = document.getElementById('agent-card-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.hide());
        }
    }

    /**
     * Format timestamp for display.
     * @param {string} ts
     * @returns {string}
     */
    _formatTime(ts) {
        if (!ts) return '';
        try {
            const d = new Date(ts);
            return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
        } catch {
            return '';
        }
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

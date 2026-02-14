/* ================================================================
   NEXUS AI MISSION CONTROL — Teleport View
   First-person agent perspective: activity timeline + profile
   ================================================================ */

class TeleportView {
    /**
     * @param {HTMLElement} container - The #teleport-view element inside viewport.
     */
    constructor(container) {
        this.container = container;
        this.agent = null;
        this.agentCode = null;
        this.activity = [];
        this.isActive = false;

        /** @type {Function|null} */
        this._onExit = null;

        /** @type {Function|null} */
        this._onAgentClick = null;
    }

    /* ── Public Methods ───────────────────────────────────────── */

    onExit(callback) { this._onExit = callback; }
    onAgentClick(callback) { this._onAgentClick = callback; }

    /**
     * Activate the teleport view for a specific agent.
     * @param {string} agentCode
     */
    async activate(agentCode) {
        this.agentCode = agentCode.toUpperCase();
        this.isActive = true;

        // Show loading
        this.container.classList.add('view--active');
        this.container.innerHTML = `
            <div class="teleport-loading animate-fade-in">
                <div class="teleport-loading__icon animate-spin">&#x25C8;</div>
                <div class="teleport-loading__text">Teleporting into ${this._escapeHtml(this.agentCode)}...</div>
            </div>
        `;

        try {
            // Fetch agent profile and messages in parallel
            const [agentRes, messagesRes] = await Promise.all([
                fetch(`/api/agents/${encodeURIComponent(agentCode)}`),
                fetch(`/api/agents/${encodeURIComponent(agentCode)}/messages?limit=50`),
            ]);

            if (!agentRes.ok) throw new Error(`Agent "${agentCode}" not found`);

            this.agent = await agentRes.json();
            this.activity = messagesRes.ok ? await messagesRes.json() : [];

            // Set department color theming
            const deptColor = this.agent.department_color || '#6366f1';
            document.documentElement.style.setProperty('--teleport-color', deptColor);
            document.querySelector('.dashboard').setAttribute('data-teleported', 'true');

            this._render();
        } catch (err) {
            console.error('[TeleportView] Error:', err);
            this.container.innerHTML = `
                <div class="teleport-loading animate-fade-in">
                    <div class="teleport-loading__icon">&#x2716;</div>
                    <div class="teleport-loading__text">${this._escapeHtml(err.message)}</div>
                </div>
            `;
        }
    }

    /**
     * Deactivate the teleport view.
     */
    deactivate() {
        this.isActive = false;
        this.agent = null;
        this.agentCode = null;
        this.activity = [];
        this.container.classList.remove('view--active');
        this.container.innerHTML = '';
        document.documentElement.style.removeProperty('--teleport-color');
        const dash = document.querySelector('.dashboard');
        if (dash) dash.removeAttribute('data-teleported');
    }

    /**
     * Handle an incoming WebSocket message while teleported.
     * @param {object} msg - SessionEvent data.
     */
    handleMessage(msg) {
        if (!this.isActive || !this.agentCode) return;

        // Check if this event is from the teleported agent
        if (msg.from_code && msg.from_code.toUpperCase() === this.agentCode) {
            this.activity.unshift(msg);
            const activityList = this.container.querySelector('.teleport-activity-list');
            if (activityList) {
                const card = this._createActivityCardDOM(msg);
                card.classList.add('teleport-flash');
                activityList.prepend(card);

                // Update count badge
                const countBadge = this.container.querySelector('.teleport-activity-count');
                if (countBadge) {
                    countBadge.textContent = this.activity.length;
                    countBadge.classList.add('animate-count-flash');
                    setTimeout(() => countBadge.classList.remove('animate-count-flash'), 300);
                }

                // Remove waiting message if present
                const waiting = activityList.querySelector('.teleport-waiting');
                if (waiting) waiting.remove();
            }
        }
    }

    /* ── Main Render ──────────────────────────────────────────── */

    _render() {
        const agent = this.agent;
        const personal = agent.personal || {};
        const deptColor = agent.department_color || '#6366f1';
        const initials = this._getInitials(agent.code);

        this.container.innerHTML = `
            <div class="teleport-wrapper animate-fade-in">

                <!-- Identity Bar -->
                <div class="teleport-identity" style="border-color: ${deptColor}">
                    <button class="teleport-identity__back" id="teleport-back" title="Back to Mission Control">
                        &#x2190; MISSION CONTROL
                    </button>
                    <div class="teleport-identity__agent">
                        <div class="teleport-identity__avatar" style="background: ${deptColor}">
                            ${this._escapeHtml(initials)}
                        </div>
                        <div class="teleport-identity__info">
                            <div class="teleport-identity__name">
                                TELEPORTED INTO: <strong>${this._escapeHtml(agent.code)}</strong>
                                ${personal.nickname ? ` &mdash; "${this._escapeHtml(personal.nickname)}"` : ''}
                            </div>
                            <div class="teleport-identity__meta">
                                ${this._escapeHtml(agent.role)}
                                &bull; ${this._escapeHtml(agent.department)}
                                &bull; ${this._escapeHtml(agent.tier || '')}
                                &bull; Agent #${String(agent.agent_number).padStart(3, '0')}
                                ${agent.reports_to ? ` &bull; Reports to: <span class="teleport-identity__link" data-agent="${this._escapeAttr(agent.reports_to)}">${this._escapeHtml(agent.reports_to)}</span>` : ''}
                            </div>
                        </div>
                    </div>
                    <kbd class="teleport-identity__kbd">ESC</kbd>
                </div>

                <!-- 2-Column Layout -->
                <div class="teleport-columns--v2">

                    <!-- Left: Activity Timeline -->
                    <div class="teleport-timeline">
                        <div class="teleport-section-header">
                            <span class="teleport-section-header__icon">&#x26A1;</span>
                            ACTIVITY TIMELINE
                            <span class="teleport-activity-count teleport-count-badge">${this.activity.length}</span>
                        </div>
                        <div class="teleport-activity-list">
                            ${this.activity.length > 0
                                ? this.activity.map(m => this._createActivityCardHTML(m)).join('')
                                : `<div class="teleport-waiting">
                                    ${agent.personality_snippet
                                        ? `<div class="teleport-waiting__quote">"${this._escapeHtml(agent.personality_snippet)}"</div>`
                                        : ''}
                                    <div>Waiting for activity...</div>
                                  </div>`
                            }
                        </div>
                    </div>

                    <!-- Right: Profile -->
                    <div class="teleport-profile">
                        <div class="teleport-section-header">
                            <span class="teleport-section-header__icon">&#x1F464;</span>
                            PROFILE
                        </div>
                        <div class="teleport-profile__content">
                            ${this._renderProfileHTML(agent)}
                        </div>
                    </div>

                </div>
            </div>
        `;

        this._wireInternalEvents();
    }

    /* ── Profile Rendering ────────────────────────────────────── */

    _renderProfileHTML(agent) {
        const personal = agent.personal || {};
        const deptColor = agent.department_color || '#6366f1';
        let html = '';

        // Avatar + key info
        html += `
            <div class="teleport-profile__header">
                <div class="teleport-profile__avatar" style="background: ${deptColor}">
                    ${this._escapeHtml(this._getInitials(agent.code))}
                </div>
                <div class="teleport-profile__name">
                    ${this._escapeHtml(personal.nickname || agent.code)}
                </div>
                <div class="teleport-profile__role">${this._escapeHtml(agent.role)}</div>
            </div>
        `;

        // Quick stats
        html += `
            <div class="teleport-profile__stats">
                <div class="teleport-profile__stat">
                    <div class="teleport-profile__stat-label">Age</div>
                    <div class="teleport-profile__stat-value">${personal.age || 'N/A'}</div>
                </div>
                <div class="teleport-profile__stat">
                    <div class="teleport-profile__stat-label">Tier</div>
                    <div class="teleport-profile__stat-value">${this._escapeHtml(agent.tier || 'N/A')}</div>
                </div>
                <div class="teleport-profile__stat">
                    <div class="teleport-profile__stat-label">Dept</div>
                    <div class="teleport-profile__stat-value">${this._escapeHtml(agent.department || 'N/A')}</div>
                </div>
                <div class="teleport-profile__stat">
                    <div class="teleport-profile__stat-label">Agent #</div>
                    <div class="teleport-profile__stat-value">${String(agent.agent_number).padStart(3, '0')}</div>
                </div>
            </div>
        `;

        // Personal sections
        const sections = [
            { key: 'about_me', label: 'About Me' },
            { key: 'what_i_bring', label: 'What I Bring' },
            { key: 'my_strengths', label: 'Strengths' },
            { key: 'my_weaknesses', label: 'Weaknesses' },
            { key: 'working_with_me', label: 'Working With Me' },
        ];

        sections.forEach(({ key, label }) => {
            const text = personal[key];
            if (text) {
                html += `
                    <div class="teleport-profile__section">
                        <div class="teleport-profile__section-title">${label}</div>
                        <div class="teleport-profile__section-text">${this._escapeHtml(text)}</div>
                    </div>
                `;
            }
        });

        // Personality
        if (agent.personality_snippet) {
            html += `
                <div class="teleport-profile__section">
                    <div class="teleport-profile__section-title">Personality</div>
                    <div class="teleport-profile__section-text">${this._escapeHtml(agent.personality_snippet)}</div>
                </div>
            `;
        }

        return html;
    }

    /* ── Activity Card Creation ────────────────────────────────── */

    _createActivityCardHTML(msg) {
        const EVENT_CONFIG = {
            thinking:    { label: 'THINKING', color: '#a855f7' },
            text:        { label: 'CLAUDE', color: '#6366f1' },
            tool_call:   { label: msg.tool_name || 'TOOL', color: '#22d3ee' },
            tool_result: { label: 'RESULT', color: '#10b981' },
            user_msg:    { label: 'USER', color: '#f59e0b' },
            system:      { label: 'SYSTEM', color: '#6b7280' },
            file_change: { label: 'FILE', color: '#14b8a6' },
        };
        const config = EVENT_CONFIG[msg.type] || EVENT_CONFIG.system;
        const time = this._formatTime(msg.timestamp);
        const bodyPreview = msg.body ? (msg.body.length > 200 ? msg.body.substring(0, 200) + '...' : msg.body) : '';

        return `
            <div class="teleport-activity-card">
                <div class="teleport-activity-card__header">
                    <span class="msg-card__event-badge" style="background:${config.color}22;color:${config.color}">${this._escapeHtml(config.label)}</span>
                    ${msg.tool_name && msg.type === 'tool_call' ? `<span class="msg-card__tool-badge">${this._escapeHtml(msg.tool_name)}</span>` : ''}
                    <span class="teleport-msg__time">${time}</span>
                </div>
                ${msg.subject ? `<div class="teleport-msg__subject">${this._escapeHtml(msg.subject)}</div>` : ''}
                ${bodyPreview ? `<div class="teleport-activity-card__body">${this._escapeHtml(bodyPreview)}</div>` : ''}
                ${msg.file_path ? `<div class="teleport-activity-card__file">${this._escapeHtml(msg.file_path)}</div>` : ''}
            </div>
        `;
    }

    _createActivityCardDOM(msg) {
        const temp = document.createElement('div');
        temp.innerHTML = this._createActivityCardHTML(msg);
        return temp.firstElementChild;
    }

    /* ── Internal Event Wiring ────────────────────────────────── */

    _wireInternalEvents() {
        // Back button
        const backBtn = this.container.querySelector('#teleport-back');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                if (this._onExit) this._onExit();
            });
        }

        // Reports-to link
        const reportsToLinks = this.container.querySelectorAll('.teleport-identity__link');
        reportsToLinks.forEach(link => {
            link.style.cursor = 'pointer';
            link.addEventListener('click', () => {
                const code = link.dataset.agent;
                if (code && this._onAgentClick) this._onAgentClick(code);
            });
        });
    }

    /* ── Helpers ───────────────────────────────────────────────── */

    _getInitials(code) {
        if (!code) return '?';
        const parts = code.split('-');
        if (parts.length === 1) return code.substring(0, 2).toUpperCase();
        return parts.map(p => p[0]).join('').substring(0, 3).toUpperCase();
    }

    _formatTime(ts) {
        if (!ts) return '';
        try {
            const d = new Date(ts);
            return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`;
        } catch {
            return '';
        }
    }

    _escapeHtml(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    _escapeAttr(str) {
        if (!str) return '';
        return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }
}

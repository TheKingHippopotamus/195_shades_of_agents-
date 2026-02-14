/* ================================================================
   NEXUS AI MISSION CONTROL — Command Palette
   Fuzzy search modal for agent teleportation (Ctrl+K)
   ================================================================ */

class CommandPalette {
    /**
     * @param {HTMLElement} overlay - The #command-palette-overlay element.
     * @param {object} agents - Map of code -> AgentProfile.
     */
    constructor(overlay, agents) {
        this.overlay = overlay;
        this.agents = agents;
        this.isOpen = false;
        this.results = [];
        this.activeIndex = 0;

        /** @type {Function|null} */
        this._onSelect = null;

        this._buildDOM();
        this._wireEvents();
    }

    /* ── Public Methods ───────────────────────────────────────── */

    open() {
        this.isOpen = true;
        this.overlay.classList.add('command-palette--open');
        this.input.value = '';
        this.activeIndex = 0;
        this._search('');
        // Focus after animation frame so the modal is visible
        requestAnimationFrame(() => this.input.focus());
    }

    close() {
        this.isOpen = false;
        this.overlay.classList.remove('command-palette--open');
        this.input.blur();
    }

    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    /**
     * Register callback for agent selection.
     * @param {Function} callback - Receives the agent code string.
     */
    onSelect(callback) {
        this._onSelect = callback;
    }

    /**
     * Update the agents map (e.g., after refresh).
     * @param {object} agents
     */
    setAgents(agents) {
        this.agents = agents;
    }

    /* ── DOM Construction ─────────────────────────────────────── */

    _buildDOM() {
        this.overlay.innerHTML = `
            <div class="command-palette__backdrop"></div>
            <div class="command-palette__modal animate-fade-in">
                <div class="command-palette__header">
                    <span class="command-palette__icon">&#x26A1;</span>
                    <input type="text"
                           class="command-palette__input"
                           placeholder="Teleport to agent... (name, code, role, dept)"
                           autocomplete="off"
                           spellcheck="false" />
                    <kbd class="command-palette__kbd">ESC</kbd>
                </div>
                <div class="command-palette__results"></div>
                <div class="command-palette__footer">
                    <span><kbd>&uarr;</kbd><kbd>&darr;</kbd> Navigate</span>
                    <span><kbd>Enter</kbd> Teleport</span>
                    <span><kbd>Esc</kbd> Close</span>
                </div>
            </div>
        `;

        this.input = this.overlay.querySelector('.command-palette__input');
        this.resultsList = this.overlay.querySelector('.command-palette__results');
        this.backdrop = this.overlay.querySelector('.command-palette__backdrop');
    }

    /* ── Event Wiring ─────────────────────────────────────────── */

    _wireEvents() {
        // Input handling
        this.input.addEventListener('input', () => {
            this._search(this.input.value);
        });

        // Keyboard navigation
        this.input.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    this._moveSelection(1);
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    this._moveSelection(-1);
                    break;
                case 'Enter':
                    e.preventDefault();
                    this._selectCurrent();
                    break;
                case 'Escape':
                    e.preventDefault();
                    this.close();
                    break;
            }
        });

        // Click backdrop to close
        this.backdrop.addEventListener('click', () => this.close());

        // Click on results
        this.resultsList.addEventListener('click', (e) => {
            const item = e.target.closest('.command-palette__item');
            if (item) {
                const code = item.dataset.code;
                if (code) this._selectAgent(code);
            }
        });
    }

    /* ── Search Logic ─────────────────────────────────────────── */

    _search(query) {
        const agentList = Object.values(this.agents);
        const q = query.toLowerCase().trim();

        if (!q) {
            // Show all agents sorted by number, limited to 20
            this.results = agentList
                .sort((a, b) => a.agent_number - b.agent_number)
                .slice(0, 20);
        } else {
            // Fuzzy match across multiple fields
            const scored = agentList.map(agent => {
                let score = 0;
                const nickname = (agent.personal?.nickname || '').toLowerCase();
                const code = agent.code.toLowerCase();
                const role = (agent.role || '').toLowerCase();
                const dept = (agent.department || '').toLowerCase();

                // Exact code match (highest priority)
                if (code === q) score += 100;
                else if (code.startsWith(q)) score += 50;
                else if (code.includes(q)) score += 30;

                // Nickname match
                if (nickname === q) score += 90;
                else if (nickname.startsWith(q)) score += 45;
                else if (nickname.includes(q)) score += 25;

                // Role match
                if (role.includes(q)) score += 20;

                // Department match
                if (dept.includes(q)) score += 15;

                // Agent number match
                const numStr = String(agent.agent_number).padStart(3, '0');
                if (numStr === q || numStr.startsWith(q)) score += 40;

                return { agent, score };
            });

            this.results = scored
                .filter(s => s.score > 0)
                .sort((a, b) => b.score - a.score)
                .slice(0, 20)
                .map(s => s.agent);
        }

        this.activeIndex = 0;
        this._renderResults();
    }

    /* ── Results Rendering ────────────────────────────────────── */

    _renderResults() {
        if (this.results.length === 0) {
            this.resultsList.innerHTML = `
                <div class="command-palette__empty">
                    No agents found
                </div>
            `;
            return;
        }

        this.resultsList.innerHTML = this.results.map((agent, i) => {
            const initials = this._getInitials(agent.code);
            const nickname = agent.personal?.nickname || '';
            const deptColor = agent.department_color || '#6366f1';
            const isActive = i === this.activeIndex;

            return `
                <div class="command-palette__item ${isActive ? 'command-palette__item--active' : ''}"
                     data-code="${this._escapeAttr(agent.code)}"
                     data-index="${i}">
                    <div class="command-palette__item-avatar" style="background: ${deptColor}">
                        ${this._escapeHtml(initials)}
                    </div>
                    <div class="command-palette__item-info">
                        <div class="command-palette__item-name">
                            <span class="command-palette__item-code">${this._escapeHtml(agent.code)}</span>
                            ${nickname ? `<span class="command-palette__item-nick">'${this._escapeHtml(nickname)}'</span>` : ''}
                        </div>
                        <div class="command-palette__item-role">${this._escapeHtml(agent.role || '')}</div>
                    </div>
                    <div class="command-palette__item-dept" style="color: ${deptColor}">
                        ${this._escapeHtml(agent.department || '')}
                    </div>
                </div>
            `;
        }).join('');

        // Ensure active item is visible
        this._scrollToActive();
    }

    /* ── Selection Logic ──────────────────────────────────────── */

    _moveSelection(delta) {
        if (this.results.length === 0) return;

        this.activeIndex = (this.activeIndex + delta + this.results.length) % this.results.length;
        this._renderResults();
    }

    _selectCurrent() {
        if (this.results.length === 0) return;
        const agent = this.results[this.activeIndex];
        if (agent) {
            this._selectAgent(agent.code);
        }
    }

    _selectAgent(code) {
        this.close();
        if (this._onSelect) {
            this._onSelect(code);
        }
    }

    _scrollToActive() {
        const activeEl = this.resultsList.querySelector('.command-palette__item--active');
        if (activeEl) {
            activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    }

    /* ── Helpers ───────────────────────────────────────────────── */

    _getInitials(code) {
        if (!code) return '?';
        const parts = code.split('-');
        if (parts.length === 1) return code.substring(0, 2).toUpperCase();
        return parts.map(p => p[0]).join('').substring(0, 3).toUpperCase();
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

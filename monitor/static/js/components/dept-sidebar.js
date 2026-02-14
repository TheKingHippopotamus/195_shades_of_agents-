/* ================================================================
   NEXUS AI MISSION CONTROL — Department Sidebar Component
   Navigation sidebar with department filtering
   ================================================================ */

class DeptSidebar {
    /**
     * @param {HTMLElement} container - The #dept-sidebar element.
     */
    constructor(container) {
        this.container = container;

        /** @type {Function|null} */
        this._onFilter = null;

        /** @type {Function|null} */
        this._onAgentClick = null;

        /** @type {string|null} Current active department filter */
        this.activeFilter = null;

        /** @type {object} Agents map (code -> profile) */
        this.agentsMap = {};

        /** @type {Map<string, HTMLElement>} Department elements by id */
        this.deptElements = new Map();
    }

    /* ── Public Methods ───────────────────────────────────────── */

    /**
     * Build the sidebar from department data.
     * @param {Array} departments - Department config array from config.py.
     * @param {object} agentsMap - Map of agent code -> AgentProfile.
     */
    init(departments, agentsMap) {
        this.agentsMap = agentsMap || {};
        this.container.innerHTML = '';

        console.log(`[DeptSidebar] init called with ${departments.length} departments, ${Object.keys(this.agentsMap).length} agents`);

        // Header
        const header = document.createElement('div');
        header.className = 'sidebar__header';
        header.textContent = 'DEPARTMENTS';
        this.container.appendChild(header);

        // "All Departments" option
        const allItem = document.createElement('div');
        allItem.className = 'dept-all dept-all--active';
        allItem.innerHTML = 'All Departments <span class="dept-item__count">' + Object.keys(this.agentsMap).length + '</span>';
        allItem.addEventListener('click', () => {
            this._setActive(null);
            if (this._onFilter) this._onFilter(null);
        });
        this.container.appendChild(allItem);
        this.allItem = allItem;

        // Department items
        departments.forEach((dept, i) => {
            try {
                const deptEl = this._renderDept(dept);
                this.deptElements.set(dept.id, deptEl);
                this.container.appendChild(deptEl);
            } catch (err) {
                console.error(`[DeptSidebar] Error rendering dept ${i} (${dept.name}):`, err);
            }
        });

        console.log(`[DeptSidebar] Rendered ${this.deptElements.size} departments, container has ${this.container.children.length} children`);
    }

    /**
     * Update the active agent counts per department.
     * @param {object} activeAgents - Map of dept_id -> count of active agents,
     *                                or an array of agent codes currently active.
     */
    updateCounts(activeAgents) {
        if (!activeAgents) return;

        if (Array.isArray(activeAgents)) {
            // Convert array of agent codes to dept counts
            const counts = {};
            activeAgents.forEach(code => {
                const agent = this.agentsMap[code];
                if (agent) {
                    counts[agent.department_id] = (counts[agent.department_id] || 0) + 1;
                }
            });
            this._applyActiveCounts(counts);
            this._updateAgentDots(activeAgents);
        } else {
            this._applyActiveCounts(activeAgents);
        }
    }

    /**
     * Register callback for department filter clicks.
     * @param {Function} callback - Receives department id (or null for all).
     */
    onFilter(callback) {
        this._onFilter = callback;
    }

    /**
     * Register callback for agent name clicks.
     * @param {Function} callback - Receives agent code.
     */
    onAgentClick(callback) {
        this._onAgentClick = callback;
    }

    /* ── Private Methods ──────────────────────────────────────── */

    /**
     * Render a single department item.
     * @param {object} dept - Department config object.
     * @returns {HTMLElement}
     */
    _renderDept(dept) {
        const el = document.createElement('div');
        el.className = 'dept-item';
        el.setAttribute('data-dept-id', dept.id);

        // Count agents in this department range
        const agentsInDept = this._getAgentsInDept(dept);
        const totalCount = agentsInDept.length;

        // Header row
        const headerRow = document.createElement('div');
        headerRow.className = 'dept-item__header';

        // Color bar
        const colorBar = document.createElement('div');
        colorBar.className = 'dept-item__color';
        colorBar.style.background = dept.color;
        headerRow.appendChild(colorBar);

        // Name
        const name = document.createElement('span');
        name.className = 'dept-item__name';
        name.textContent = dept.name;
        name.title = dept.name;
        headerRow.appendChild(name);

        // Counts
        const counts = document.createElement('div');
        counts.className = 'dept-item__counts';

        const activeCount = document.createElement('span');
        activeCount.className = 'dept-item__active-count';
        activeCount.setAttribute('data-dept-active', dept.id);
        activeCount.textContent = '0';
        activeCount.style.display = 'none';
        counts.appendChild(activeCount);

        const totalBadge = document.createElement('span');
        totalBadge.className = 'dept-item__count';
        totalBadge.textContent = totalCount;
        counts.appendChild(totalBadge);

        // Expand arrow
        const expand = document.createElement('span');
        expand.className = 'dept-item__expand';
        expand.textContent = '\u25B6';
        counts.appendChild(expand);

        headerRow.appendChild(counts);
        el.appendChild(headerRow);

        // Agent list (hidden by default)
        const agentList = document.createElement('div');
        agentList.className = 'dept-item__agents';

        agentsInDept.forEach(agent => {
            const agentEl = document.createElement('div');
            agentEl.className = 'dept-agent';

            const dot = document.createElement('span');
            dot.className = 'dept-agent__dot dept-agent__dot--idle';
            dot.setAttribute('data-agent-dot', agent.code);
            agentEl.appendChild(dot);

            const code = document.createElement('span');
            code.className = 'dept-agent__code';
            code.textContent = agent.code;
            agentEl.appendChild(code);

            if (agent.personal && agent.personal.nickname) {
                const nick = document.createElement('span');
                nick.className = 'dept-agent__nick';
                nick.textContent = agent.personal.nickname;
                agentEl.appendChild(nick);
            }

            agentEl.addEventListener('click', (e) => {
                e.stopPropagation();
                if (this._onAgentClick) this._onAgentClick(agent.code);
            });

            agentList.appendChild(agentEl);
        });

        el.appendChild(agentList);

        // Click handlers
        headerRow.addEventListener('click', (e) => {
            // If clicking on expand area, toggle expand
            if (e.target === expand || e.target === counts) {
                e.stopPropagation();
                this._toggleExpand(el);
                return;
            }

            // Otherwise, set filter
            this._setActive(dept.id);
            if (this._onFilter) this._onFilter(dept.id);
        });

        // Double-click to expand
        headerRow.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            this._toggleExpand(el);
        });

        return el;
    }

    /**
     * Toggle department agent list expansion.
     * @param {HTMLElement} deptEl
     */
    _toggleExpand(deptEl) {
        deptEl.classList.toggle('dept-item--expanded');
    }

    /**
     * Set the active department filter.
     * @param {string|null} deptId
     */
    _setActive(deptId) {
        this.activeFilter = deptId;

        // Update "All" button
        this.allItem.classList.toggle('dept-all--active', deptId === null);

        // Update department items
        this.deptElements.forEach((el, id) => {
            el.classList.toggle('dept-item--active', id === deptId);
        });
    }

    /**
     * Get agents belonging to a department.
     * @param {object} dept - Department config.
     * @returns {Array}
     */
    _getAgentsInDept(dept) {
        const agents = [];
        Object.values(this.agentsMap).forEach(agent => {
            if (agent.department_id === dept.id) {
                agents.push(agent);
            }
        });
        agents.sort((a, b) => a.agent_number - b.agent_number);
        return agents;
    }

    /**
     * Apply active counts from a dept_id -> count map.
     * @param {object} counts
     */
    _applyActiveCounts(counts) {
        this.deptElements.forEach((el, deptId) => {
            const count = counts[deptId] || 0;
            const activeEl = el.querySelector(`[data-dept-active="${deptId}"]`);
            if (activeEl) {
                activeEl.textContent = count;
                activeEl.style.display = count > 0 ? '' : 'none';
            }
        });
    }

    /**
     * Update individual agent dot indicators.
     * @param {Array} activeCodes - Array of active agent code strings.
     */
    _updateAgentDots(activeCodes) {
        // Reset all dots to idle
        const allDots = this.container.querySelectorAll('[data-agent-dot]');
        allDots.forEach(dot => {
            dot.classList.remove('dept-agent__dot--active');
            dot.classList.add('dept-agent__dot--idle');
        });

        // Light up active agent dots
        if (activeCodes && activeCodes.length > 0) {
            activeCodes.forEach(code => {
                const dot = this.container.querySelector(`[data-agent-dot="${code}"]`);
                if (dot) {
                    dot.classList.add('dept-agent__dot--active');
                    dot.classList.remove('dept-agent__dot--idle');
                }
            });
        }
    }
}

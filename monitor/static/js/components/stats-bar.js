/* ================================================================
   NEXUS AI MISSION CONTROL — Stats Bar Component
   Live statistics header with animated counters
   ================================================================ */

class StatsBar {
    /**
     * @param {HTMLElement} container - The #stats-bar element.
     */
    constructor(container) {
        this.container = container;

        /** @type {Object<string, HTMLElement>} */
        this.valueElements = {};

        /** @type {Object<string, number>} */
        this.currentValues = {};

        this._init();
    }

    /* -- Initialization ------------------------------------------------- */

    _init() {
        const stats = [
            { key: 'active_agents',   label: 'Active',   variant: '' },
            { key: 'session_events',  label: 'Events',   variant: '' },
            { key: 'tools_called',    label: 'Tools',    variant: '' },
            { key: 'tokens_used',     label: 'Tokens',   variant: '' },
            { key: 'files_changed',   label: 'Files',    variant: '' },
            { key: 'thinking_blocks', label: 'Thinking', variant: '' },
            { key: 'monitor_status',  label: 'Status',   variant: 'status' },
        ];

        stats.forEach(stat => {
            const counter = document.createElement('div');
            counter.className = 'stat-counter';

            if (stat.variant === 'status') {
                // Status pill instead of number
                const statusEl = document.createElement('span');
                statusEl.className = 'stat-counter__status';
                statusEl.setAttribute('data-ws-status', 'disconnected');
                statusEl.setAttribute('data-stat-key', stat.key);
                statusEl.textContent = 'LIVE';
                this.valueElements[stat.key] = statusEl;
                counter.appendChild(statusEl);
            } else {
                const valueEl = document.createElement('span');
                const variantClass = stat.variant ? `stat-counter__value--${stat.variant}` : '';
                valueEl.className = `stat-counter__value ${variantClass}`;
                valueEl.setAttribute('data-stat-key', stat.key);
                valueEl.textContent = '0';
                this.valueElements[stat.key] = valueEl;
                this.currentValues[stat.key] = 0;
                counter.appendChild(valueEl);

                const labelEl = document.createElement('span');
                labelEl.className = 'stat-counter__label';
                labelEl.textContent = stat.label;
                counter.appendChild(labelEl);
            }

            this.container.appendChild(counter);
        });
    }

    /* -- Public Methods ------------------------------------------------- */

    /**
     * Update all stat counters with new data.
     * @param {object} stats - DashboardStats data.
     */
    update(stats) {
        if (!stats) return;

        const numericKeys = [
            'total_agents',
            'session_events',
            'tools_called',
            'tokens_used',
            'files_changed',
            'thinking_blocks',
        ];

        numericKeys.forEach(key => {
            if (stats[key] !== undefined && this.valueElements[key]) {
                const newVal = parseInt(stats[key], 10) || 0;
                const oldVal = this.currentValues[key] || 0;

                if (newVal !== oldVal) {
                    this._animateValue(this.valueElements[key], oldVal, newVal, key);
                    this.currentValues[key] = newVal;
                }
            }
        });

        // Handle active agent codes array → active_agents counter
        if (stats.active_agent_codes && this.valueElements['active_agents']) {
            const count = stats.active_agent_codes.length;
            const oldVal = this.currentValues['active_agents'] || 0;
            if (count !== oldVal) {
                this._animateValue(this.valueElements['active_agents'], oldVal, count, 'active_agents');
                this.currentValues['active_agents'] = count;
            }
        }

        // Update monitor status
        if (stats.monitor_status && this.valueElements['monitor_status']) {
            const statusEl = this.valueElements['monitor_status'];
            statusEl.textContent = stats.monitor_status;

            if (stats.monitor_status === 'IDLE' || stats.monitor_status === 'NO FILE') {
                statusEl.classList.add('stat-counter__status--paused');
            } else {
                statusEl.classList.remove('stat-counter__status--paused');
            }
        }
    }

    /* -- Private Methods ------------------------------------------------ */

    /**
     * Animate a counter value from old to new.
     * @param {HTMLElement} el - The value element.
     * @param {number} oldVal
     * @param {number} newVal
     * @param {string} key - The stat key for formatting.
     */
    _animateValue(el, oldVal, newVal, key) {
        const duration = 400; // ms
        const steps = 20;
        const stepDuration = duration / steps;
        const increment = (newVal - oldVal) / steps;
        let current = oldVal;
        let step = 0;

        // Add flash animation
        el.classList.add('animate-count-flash');
        setTimeout(() => {
            el.classList.remove('animate-count-flash');
        }, 300);

        const timer = setInterval(() => {
            step++;
            current += increment;

            if (step >= steps) {
                clearInterval(timer);
                current = newVal;
            }

            el.textContent = key === 'tokens_used' ? this._formatTokens(Math.round(current)) : Math.round(current).toLocaleString();
        }, stepDuration);
    }

    /**
     * Format token counts with K/M suffix.
     * @param {number} val
     * @returns {string}
     */
    _formatTokens(val) {
        if (val >= 1000000) return (val / 1000000).toFixed(1) + 'M';
        if (val >= 1000) return (val / 1000).toFixed(1) + 'K';
        return val.toLocaleString();
    }
}

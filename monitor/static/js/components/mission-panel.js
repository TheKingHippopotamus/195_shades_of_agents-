/* ================================================================
   NEXUS AI MISSION CONTROL — Session Panel Component
   Session overview with key metrics
   ================================================================ */

class SessionPanel {
    /**
     * @param {HTMLElement} container - The #mission-board element.
     */
    constructor(container) {
        this.container = container;
    }

    /* -- Public Methods ------------------------------------------------- */

    /**
     * Fetch session info from the API and render it.
     */
    async load() {
        try {
            const response = await fetch('/api/session');
            if (!response.ok) throw new Error('Failed to fetch session');
            const session = await response.json();
            this.container.innerHTML = '';
            const card = this._renderSession(session);
            this.container.appendChild(card);
        } catch (err) {
            console.error('[SessionPanel] Error:', err);
            this.container.innerHTML = `<div class="empty-state"><div class="empty-state__icon">\u25C7</div><p class="empty-state__text">No active session</p></div>`;
        }
    }

    /* -- Private Methods ------------------------------------------------ */

    /**
     * Render a session info card.
     * @param {object} session
     * @returns {HTMLElement}
     */
    _renderSession(session) {
        const card = document.createElement('div');
        card.className = 'mission-card animate-fade-in';

        const items = [
            { label: 'Model', value: session.model || 'Unknown' },
            { label: 'Status', value: session.monitor_status || 'IDLE' },
            { label: 'JSONL File', value: session.jsonl_file ? session.jsonl_file.split('/').pop() : 'None' },
            { label: 'Duration', value: this._formatDuration(session.session_duration_seconds || 0) },
            { label: 'Events', value: (session.events_processed || 0).toLocaleString() },
            { label: 'Files Changed', value: (session.files_changed || 0).toLocaleString() },
        ];

        // Build card content
        const header = document.createElement('div');
        header.className = 'mission-card__header';
        const title = document.createElement('div');
        title.className = 'mission-card__name';
        title.textContent = 'Session Overview';
        header.appendChild(title);
        card.appendChild(header);

        items.forEach(item => {
            const row = document.createElement('div');
            row.style.cssText = 'display:flex;justify-content:space-between;padding:0.35rem 0;border-bottom:1px solid var(--border);font-size:0.8rem;';
            const label = document.createElement('span');
            label.style.color = 'var(--text-muted)';
            label.style.fontFamily = 'var(--font-mono)';
            label.style.fontSize = '0.75rem';
            label.textContent = item.label;
            const value = document.createElement('span');
            value.style.color = 'var(--text)';
            value.style.fontFamily = 'var(--font-mono)';
            value.style.fontWeight = '600';
            value.style.fontSize = '0.75rem';
            value.textContent = item.value;
            row.appendChild(label);
            row.appendChild(value);
            card.appendChild(row);
        });

        return card;
    }

    /**
     * Format seconds into a human-readable duration.
     * @param {number} seconds
     * @returns {string}
     */
    _formatDuration(seconds) {
        if (!seconds) return '0s';
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor(seconds % 60);
        if (h > 0) return `${h}h ${m}m`;
        if (m > 0) return `${m}m ${s}s`;
        return `${s}s`;
    }
}

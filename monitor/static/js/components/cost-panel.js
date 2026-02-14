/* ================================================================
   NEXUS AI MISSION CONTROL — Token Cost Panel
   Real-time cost estimation based on model pricing
   ================================================================ */

class CostPanel {
    /**
     * @param {HTMLElement} container - The #mission-board element.
     */
    constructor(container) {
        this.container = container;
        this.el = null;

        /** Model pricing: $ per 1M tokens */
        this.PRICING = {
            'claude-opus-4-6':     { input: 15,   output: 75,  cache: 1.875 },
            'claude-sonnet-4-5':   { input: 3,    output: 15,  cache: 0.375 },
            'claude-haiku-4-5':    { input: 0.80, output: 4,   cache: 0.10  },
        };
    }

    /* -- Public Methods ------------------------------------------------- */

    /**
     * Update cost display with latest stats.
     * @param {object} stats - Stats data from WebSocket broadcast.
     */
    update(stats) {
        if (!stats) return;

        const input = stats.input_tokens_total || 0;
        const output = stats.output_tokens_total || 0;
        const cache = stats.cache_tokens_total || 0;
        const model = stats.model || '';

        // Skip if no tokens yet
        if (input === 0 && output === 0 && cache === 0) return;

        // Find pricing by matching model string
        let pricing = null;
        for (const [key, p] of Object.entries(this.PRICING)) {
            if (model.includes(key)) {
                pricing = p;
                break;
            }
        }
        // Default to sonnet pricing if model not recognized
        if (!pricing) pricing = this.PRICING['claude-sonnet-4-5'];

        const inputCost = (input / 1_000_000) * pricing.input;
        const outputCost = (output / 1_000_000) * pricing.output;
        const cacheCost = (cache / 1_000_000) * pricing.cache;
        const totalCost = inputCost + outputCost + cacheCost;

        if (!this.el) {
            this.el = document.createElement('div');
            this.el.className = 'mission-card animate-fade-in';
            this.el.style.marginTop = '0.5rem';
            this.container.appendChild(this.el);
        }

        this.el.innerHTML = `
            <div class="mission-card__header">
                <div class="mission-card__name">Token Cost Estimate</div>
            </div>
            ${this._row('Model', model || 'Unknown')}
            ${this._row('Input Tokens', this._fmtTokens(input))}
            ${this._row('Output Tokens', this._fmtTokens(output))}
            ${this._row('Cache Tokens', this._fmtTokens(cache))}
            ${this._row('Input Cost', '$' + inputCost.toFixed(4))}
            ${this._row('Output Cost', '$' + outputCost.toFixed(4))}
            ${this._row('Cache Cost', '$' + cacheCost.toFixed(4))}
            <div style="display:flex;justify-content:space-between;padding:0.5rem 0 0.25rem;font-size:0.85rem;font-weight:700;border-top:2px solid var(--border);margin-top:0.25rem;">
                <span style="color:var(--accent2);font-family:var(--font-mono);">TOTAL</span>
                <span style="color:var(--accent);font-family:var(--font-mono);">$${totalCost.toFixed(4)}</span>
            </div>
        `;
    }

    /* -- Private Methods ------------------------------------------------ */

    /**
     * Create a label/value row.
     * @param {string} label
     * @param {string} value
     * @returns {string} HTML string
     */
    _row(label, value) {
        return `<div style="display:flex;justify-content:space-between;padding:0.35rem 0;border-bottom:1px solid var(--border);font-size:0.8rem;">
            <span style="color:var(--text-muted);font-family:var(--font-mono);font-size:0.75rem;">${label}</span>
            <span style="color:var(--text);font-family:var(--font-mono);font-weight:600;font-size:0.75rem;">${value}</span>
        </div>`;
    }

    /**
     * Format token counts with K/M suffix.
     * @param {number} n
     * @returns {string}
     */
    _fmtTokens(n) {
        if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
        if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K';
        return n.toLocaleString();
    }
}

/* ================================================================
   NEXUS AI MISSION CONTROL — WebSocket Client
   Auto-reconnecting WebSocket with event dispatch
   ================================================================ */

class NexusWebSocket {
    /**
     * @param {string} [url] - WebSocket endpoint. Auto-detected if omitted.
     */
    constructor(url) {
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        this.url = url || `${protocol}//${window.location.host}/ws/feed`;

        /** @type {WebSocket|null} */
        this.ws = null;

        /** @type {Map<string, Set<Function>>} */
        this._handlers = new Map();

        /** Reconnection state */
        this._reconnectAttempts = 0;
        this._maxReconnectDelay = 30000; // 30 seconds
        this._baseReconnectDelay = 1000; // 1 second
        this._reconnectTimer = null;
        this._shouldReconnect = true;

        /** Connection status */
        this._connected = false;
    }

    /* ── Singleton ────────────────────────────────────────────── */

    /**
     * Get or create the singleton instance.
     * @param {string} [url]
     * @returns {NexusWebSocket}
     */
    static getInstance(url) {
        if (!NexusWebSocket._instance) {
            NexusWebSocket._instance = new NexusWebSocket(url);
        }
        return NexusWebSocket._instance;
    }

    /* ── Connection ───────────────────────────────────────────── */

    /**
     * Open the WebSocket connection.
     */
    connect() {
        if (this.ws && (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING)) {
            return;
        }

        this._shouldReconnect = true;

        try {
            this.ws = new WebSocket(this.url);
        } catch (err) {
            console.error('[NexusWS] Failed to create WebSocket:', err);
            this._scheduleReconnect();
            return;
        }

        this.ws.onopen = () => {
            console.log('[NexusWS] Connected');
            this._connected = true;
            this._reconnectAttempts = 0;
            this._updateConnectionStatus(true);
            this._dispatch('_connection', { connected: true });
        };

        this.ws.onmessage = (event) => {
            try {
                const payload = JSON.parse(event.data);
                const eventType = payload.event;
                const data = payload.data;

                if (eventType) {
                    this._dispatch(eventType, data);
                }
            } catch (err) {
                console.warn('[NexusWS] Failed to parse message:', err, event.data);
            }
        };

        this.ws.onclose = (event) => {
            console.log('[NexusWS] Disconnected', event.code, event.reason);
            this._connected = false;
            this._updateConnectionStatus(false);
            this._dispatch('_connection', { connected: false });

            if (this._shouldReconnect) {
                this._scheduleReconnect();
            }
        };

        this.ws.onerror = (err) => {
            console.error('[NexusWS] Error:', err);
        };
    }

    /**
     * Close the WebSocket connection and stop reconnection.
     */
    disconnect() {
        this._shouldReconnect = false;

        if (this._reconnectTimer) {
            clearTimeout(this._reconnectTimer);
            this._reconnectTimer = null;
        }

        if (this.ws) {
            this.ws.close(1000, 'Client disconnect');
            this.ws = null;
        }

        this._connected = false;
        this._updateConnectionStatus(false);
    }

    /* ── Event Handlers ───────────────────────────────────────── */

    /**
     * Register a handler for a specific event type.
     * @param {string} eventType - Event type: "message", "stats", "mission_update", etc.
     * @param {Function} callback - Handler function receiving the event data.
     * @returns {Function} Unsubscribe function.
     */
    onMessage(eventType, callback) {
        if (!this._handlers.has(eventType)) {
            this._handlers.set(eventType, new Set());
        }
        this._handlers.get(eventType).add(callback);

        // Return unsubscribe function
        return () => {
            const handlers = this._handlers.get(eventType);
            if (handlers) {
                handlers.delete(callback);
            }
        };
    }

    /**
     * Send data to the server.
     * @param {object} data - Data to send (will be JSON-encoded).
     */
    send(data) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(data));
        } else {
            console.warn('[NexusWS] Cannot send — not connected');
        }
    }

    /**
     * Check if the WebSocket is currently connected.
     * @returns {boolean}
     */
    get connected() {
        return this._connected;
    }

    /* ── Private Methods ──────────────────────────────────────── */

    /**
     * Schedule a reconnection attempt with exponential backoff.
     */
    _scheduleReconnect() {
        if (this._reconnectTimer) return;

        const delay = Math.min(
            this._baseReconnectDelay * Math.pow(2, this._reconnectAttempts),
            this._maxReconnectDelay
        );

        console.log(`[NexusWS] Reconnecting in ${delay}ms (attempt ${this._reconnectAttempts + 1})`);

        this._reconnectTimer = setTimeout(() => {
            this._reconnectTimer = null;
            this._reconnectAttempts++;
            this.connect();
        }, delay);
    }

    /**
     * Dispatch an event to all registered handlers.
     * @param {string} eventType
     * @param {*} data
     */
    _dispatch(eventType, data) {
        const handlers = this._handlers.get(eventType);
        if (handlers) {
            handlers.forEach(handler => {
                try {
                    handler(data);
                } catch (err) {
                    console.error(`[NexusWS] Handler error for "${eventType}":`, err);
                }
            });
        }

        // Also dispatch to wildcard handlers
        const wildcardHandlers = this._handlers.get('*');
        if (wildcardHandlers) {
            wildcardHandlers.forEach(handler => {
                try {
                    handler(eventType, data);
                } catch (err) {
                    console.error('[NexusWS] Wildcard handler error:', err);
                }
            });
        }
    }

    /**
     * Update any connection status indicators in the DOM.
     * @param {boolean} connected
     */
    _updateConnectionStatus(connected) {
        const indicators = document.querySelectorAll('[data-ws-status]');
        indicators.forEach(el => {
            el.setAttribute('data-ws-status', connected ? 'connected' : 'disconnected');
            el.textContent = connected ? 'LIVE' : 'OFFLINE';
            if (connected) {
                el.classList.remove('stat-counter__status--paused');
            } else {
                el.classList.add('stat-counter__status--paused');
            }
        });
    }
}

/** @type {NexusWebSocket|null} */
NexusWebSocket._instance = null;

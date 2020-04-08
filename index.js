class LingEventEmitter {
    constructor() {
        this.listeners = {};
    }

    on(eventName, cb) {
        if (false === this.listeners.hasOwnProperty(eventName)) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(cb);
    }

    dispatch(eventName, ...args) {
        if (true === this.listeners.hasOwnProperty(eventName)) {
            var listeners = this.listeners[eventName];
            listeners.forEach(cb => {
                cb(...args);
            });
        }
    }
}


module.exports = LingEventEmitter;
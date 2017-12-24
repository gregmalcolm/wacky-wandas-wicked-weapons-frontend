export default class AppView {
    constructor(events) {
        this.template = "";

        this.events = events;
        this.registerEvents();
    }

    registerEvents() {
	    window.addEventListener("hashchange", (e) => {
            this.events.transition(e.oldURL, e.newURL);
        });

        this._registerEvent(".weapons-search", "submit", (e) => {
            e.preventDefault();
            const inputEl = e.currentTarget.querySelector(".weapons-search__input");
            this.events.weaponsSearch(inputEl.value);
        });
    }

    render() {
        const contentEl = document.querySelector(".content");
        contentEl.innerHTML = this.template;
    }

    _registerEvent(selector, eventType, cb) {
        const el = document.querySelector(selector);
        if (el) {
            el.addEventListener(eventType, cb);
        } else {
            console.error("Can't find element needed for an event");
        }
    }
}

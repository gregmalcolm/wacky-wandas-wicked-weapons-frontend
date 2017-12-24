export default class AppView {
    constructor(controller) {
        this.template = "";

        this.controller = controller;
        this.registerEvents();
    }

    registerEvents() {
	    window.addEventListener("hashchange", (e) => {
            this.controller.transition(e.oldURL, e.newURL);
        });

        this._registerEvent(".weapons-search", "submit", (e) => {
            e.preventDefault();
            const inputEl = e.currentTarget.querySelector(".weapons-search__input");
            this.controller.weaponsSearch(inputEl.value);
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

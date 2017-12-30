export default class BaseView {
    constructor(controller) {
        this.template = "";
        this.controller = controller;
    }

    registerEvents() {
    }

    modelChanged(event, args) {
    }

    render() {
        const contentEl = document.querySelector(".content");
        contentEl.innerHTML = this.template;

        this.registerEvents();
    }

    _registerEvent(selector, eventType, callback) {
        const els = document.querySelectorAll(selector);
        const eventTypes =
            (typeof eventType ===  "string")
                ? [ eventType ]
                : eventType;

        if (els.length > 0) {
            eventTypes.forEach((et) =>
                els.forEach((el) => el.addEventListener(et, callback))
            );
        } else {
            console.info(`Can't find element needed for an event ${selector}`);
        }
    }

    _updateElement(selector, html) {
        const el = document.querySelector(selector);
        el.innerHTML = html;
    }
}

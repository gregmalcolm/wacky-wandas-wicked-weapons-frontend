export default class BaseView {
    constructor(controller) {
        this.template = "";
        this.controller = controller;
        this.registerEvents();
    }

    registerEvents() {
    }

    modelChanged(event, args) {
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
            console.error(`Can't find element needed for an event ${selector}`);
        }
    }

    _updateElement(selector, html) {
        const el = document.querySelector(selector);
        el.innerHTML = html;
    }
}

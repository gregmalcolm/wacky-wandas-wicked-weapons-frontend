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

    _registerEvent(selector, eventType, cb) {
        const els = document.querySelectorAll(selector);
        if (els.length > 0) {
            els.forEach((el) => el.addEventListener(eventType, cb));
        } else {
            console.info(`Can't find element needed for an event ${selector}`);
        }
    }

    _updateElement(selector, html) {
        const el = document.querySelector(selector);
        el.innerHTML = html;
    }
}

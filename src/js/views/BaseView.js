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
            console.log(`Can't find element needed for an event ${selector}`);
        }
    }

    _replaceInnerElement(selector, html) {
        const el = document.querySelector(selector);
        if (el) {
            el.innerHTML = html;
            return el;
        } else {
            console.warn(`BaseView._replaceInnerElement() failed, could not find element '${selector}'`);
        }
    }

    _replaceElement(selector, html) {
        const el = document.querySelector(selector);
        if (el) {
            el.outerHTML = html;
            return el;
        } else {
            console.warn(`BaseView._replaceElement() failed, could not find element '${selector}'`);
        }
    }
}

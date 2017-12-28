export default class BasePage {
    constructor(router) {
        this.controller = null;
        this.view = null;
    }

    updateApp(pageName) {
        if (pageName) {
            window.app.controllers[pageName] = this.controller;
            window.app.views[pageName] = this.view;
        }
    }
}

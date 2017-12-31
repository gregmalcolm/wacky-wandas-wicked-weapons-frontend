export default class BasePage {
    constructor(router) {
        this.controller = null;
        this.view = null;
    }

    updateApp(pageName) {
        if (pageName) {
            window.app.controllers[`${pageName}Controller`] = this.controller;
            window.app.views[`${pageName}View`] = this.view;
        }
    }
}

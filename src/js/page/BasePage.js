export default class BasePage {
    constructor(router) {
        this.controller = null;
        this.view = null;
    }

    updateApp() {
        window.app.controllers.app = this.controller;
        window.app.views.app = this.view;
    }
}

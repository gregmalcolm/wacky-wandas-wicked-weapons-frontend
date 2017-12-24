import AppController from '../Controllers/AppController.js'
import AppView from '../views/AppView.js'

export default class AppPage {
    constructor(router) {
        this.controller = new AppController(router);
        this.view = new AppView(this.controller);

        window.app.controllers.app = this.controller;
        window.app.views.app = this.view;
    }
}

import IndexController from "../Controllers/IndexController.js"
import IndexView from "../views/IndexView.js"

export default class IndexPage {
    constructor(router) {
        this.controller = new IndexController(router);
        this.view = new IndexView(this.controller);

        window.app.controllers.index = this.controller;
        window.app.views.index = this.view;
    }

    transition() {
        this.view.render();
    }
}

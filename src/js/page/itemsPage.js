import ItemsController from "../Controllers/ItemsController.js"
import ItemsView from "../views/ItemsView.js"

export default class ItemsPage {
    constructor(router) {
        this.controller = new ItemsController(router);
        this.view = new ItemsView(this.controller);

        window.app.controllers.items = this.controller;
        window.app.views.items = this.view;
    }

    transition() {
        this.view.render();
    }
}

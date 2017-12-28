import BasePage from './BasePage.js'
import ItemsController from "../Controllers/ItemsController.js"
import ItemsView from "../views/ItemsView.js"

export default class ItemsPage extends BasePage {
    constructor(router) {
        super(router);

        this.controller = new ItemsController(router);
        this.view = new ItemsView(this.controller);

        this.updateApp("items");
    }

    transition() {
        this.view.render();
    }
}

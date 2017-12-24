import BasePage from './BasePage.js'
import ItemsController from "../Controllers/ItemsController.js"
import ItemsView from "../views/ItemsView.js"

export default class ItemsPage extends BasePage {
    constructor(router) {
        super();

        this.controller = new ItemsController(router);
        this.view = new ItemsView(this.controller);

        this.updateApp();
    }

    transition() {
        this.view.render();
    }
}

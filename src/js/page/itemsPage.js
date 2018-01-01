import '../../css/items.css';

import BasePage from './BasePage.js';
import ItemsController from "../controllers/ItemsController.js";
import ItemsView from "../views/ItemsView.js";

import CartItemsCollection from "../models/CartItemsCollection.js";

export default class ItemsPage extends BasePage {
    constructor(router) {
        super(router);

        this.controller = new ItemsController(router);
        this.view = new ItemsView(this.controller);
        this.controller.cart = new CartItemsCollection(this.view);

        this.updateApp("items");
        window.app.models.cart = this.controller.cart
    }

    transition(params) {
        this.controller.cart.refresh();
        this.view.render(this.controller.cart);
    }
}

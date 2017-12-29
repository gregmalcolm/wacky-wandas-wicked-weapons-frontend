import pageTemplate from "../templates/items.html.js";

import BaseView from "./BaseView.js"

export default class ItemsView extends BaseView {
    constructor(controller) {
        super(controller);

        this.template = "";
    }

    render(cart) {
        this.template = pageTemplate(cart);
        super.render();
    }

    registerEvents() {
        super.registerEvents();
        this._registerEvent(".cart-remove-link", "click", (e) => {
            e.preventDefault();

            const weaponId = e.target.getAttribute("data-weapon-id");
            this.controller.removeCartItem(weaponId);
        });

    }

}

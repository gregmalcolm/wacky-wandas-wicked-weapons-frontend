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

}

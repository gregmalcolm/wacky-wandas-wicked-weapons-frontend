import pageTemplate from "../templates/items.html.js";

import AppView from "./AppView.js"

export default class ItemsView extends AppView {
    constructor(controller) {
        super(controller);

        this.template = pageTemplate();
    }
}

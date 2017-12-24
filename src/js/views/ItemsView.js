import pageTemplate from "../templates/items.html.js";

import BaseView from "./BaseView.js"

export default class ItemsView extends BaseView {
    constructor(controller) {
        super(controller);

        this.template = pageTemplate();
    }

}

import pageTemplate from "../templates/index.html.js";

import BaseView from "./BaseView.js"

export default class IndexView extends BaseView {
    constructor(controller) {
        super(controller);

        this.template = pageTemplate();
    }
}

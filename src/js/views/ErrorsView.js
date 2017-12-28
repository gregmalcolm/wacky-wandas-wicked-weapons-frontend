import pageTemplate from "../templates/errors.html.js";

import BaseView from "./BaseView.js"

export default class ErrorsView extends BaseView {
    constructor(controller) {
        super(controller);

        this.template = pageTemplate();
    }

}

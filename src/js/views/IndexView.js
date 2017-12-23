import pageTemplate from "../templates/index.html.js";

import AppView from "./AppView.js"

export default class IndexView extends AppView {
    constructor(events) {
        super(events);

        this.template = pageTemplate();
    }
}

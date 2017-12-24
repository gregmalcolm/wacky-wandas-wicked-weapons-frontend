import pageTemplate from "../templates/weapons.html.js";
import resultsTemplate from "../templates/weapons/_result.html.js";

import BaseView from "./BaseView.js"

export default class WeaponsView extends BaseView {
    constructor(controller) {
        super(controller);

        this.template = pageTemplate();
    }

    registerEvents() {
    }

    render() {
        super.render();

        const weaponsListEl = document.querySelector(".weapons-list");

        weaponsListEl.innerHTML = resultsTemplate()
            + resultsTemplate()
            + resultsTemplate()
            + resultsTemplate()
            + resultsTemplate()
            + resultsTemplate()
            + resultsTemplate()
            + resultsTemplate();
    }
}

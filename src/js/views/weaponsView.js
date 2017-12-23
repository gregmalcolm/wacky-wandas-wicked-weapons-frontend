import pageTemplate from "../templates/weapons/container.html.js";
import resultsTemplate from "../templates/weapons/_result.html.js";

import AppView from "./AppView.js"

export default class WeaponsView extends AppView {
    constructor(events) {
        super(events);

        this.template = pageTemplate();
    }

    render() {
        super.render();

        const weaponsListEl = document.querySelector(".weapons-list");

        weaponsListEl.innerHTML = resultsTemplate()
            + resultsTemplate()
            + resultsTemplate()
            + resultsTemplate();
    }
}

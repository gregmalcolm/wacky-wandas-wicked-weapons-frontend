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

    modelChanged(event, args) {
        switch(event) {
            case "itemsChanged":
                this._renderWeapons(...args);
                break;
        }
    }

    render() {
        super.render();
    }

    _renderWeapons(weapons) {
        const html = weapons.reduce((acc, weapon) => {
            acc = acc + resultsTemplate();
            return acc;
        }, "");

        const weaponsListEl = document.querySelector(".weapons-list");
        weaponsListEl.innerHTML = html;
    }
}

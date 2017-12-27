import pageTemplate from "../templates/weapons.html.js";

import resultsTemplate from "../templates/weapons/_result.html.js";
import loadingTemplate from "../templates/weapons/_loading.html.js";

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

        const weaponsHeaderEl = document.querySelector(".weapons-header");
        weaponsHeaderEl.innerHTML = loadingTemplate();
    }

    _renderWeapons(weapons) {
        const weaponsHeaderEl = document.querySelector(".weapons-header");
        weaponsHeaderEl.innerHTML = "";

        const html = weapons.reduce((acc, weapon) => {
            acc = acc + resultsTemplate(weapon);
            return acc;
        }, "");

        const weaponsListEl = document.querySelector(".weapons-list");
        weaponsListEl.innerHTML = html;
    }
}

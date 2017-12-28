import pageHtml from "../templates/weapons.html.js";

import resultHtml from "../templates/weapons/_result.html.js";
import resultsInfoHtml from "../templates/weapons/_resultsInfo.html.js";
import loadingHtml from "../templates/weapons/_loading.html.js";
import criticalFailureHtml from "../templates/weapons/_criticalFailure.html.js";

import BaseView from "./BaseView.js"

export default class WeaponsView extends BaseView {
    constructor(controller) {
        super(controller);

        this.template = pageHtml();
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

        this._updateElement(".weapons-header", loadingHtml());
    }

    _renderWeapons(weapons) {
        this._updateElement(".weapons-header", resultsInfoHtml(weapons));
        if (weapons.items.length > 0) {
            this._updateElement(".weapons-footer", resultsInfoHtml(weapons));
        } else {
            this._updateElement(".weapons-footer", criticalFailureHtml());
        }


        const html = this._buildResultsHtml(weapons.items);
        this._updateElement(".weapons-list", html);

        this._registerResultsEvents();
    }

    _registerResultsEvents() {
        this._registerEvent(".btn-prev", "click", () => {
            this.controller.prevPage();
        });

        this._registerEvent(".btn-next", "click", () => {
            this.controller.nextPage();
        });

        this._registerEvent(".buy-button", "click", (e) => {
            this.controller.buy();
        })
    }


    _buildResultsHtml(weapons) {
        return weapons.reduce((acc, weapon) => {
            acc = acc + resultHtml(weapon);
            return acc;
        }, "");
    }
}

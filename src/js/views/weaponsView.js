import pageHtml from "../templates/weapons.html.js";

import resultsHtml from "../templates/weapons/_results.html.js";

import BaseView from "./BaseView.js"

export default class WeaponsView extends BaseView {
    constructor(controller) {
        super(controller);

        this.template = pageHtml();
    }

    modelChanged(event, args) {
        switch(event) {
            case "weaponsChanged":
                this._renderWeapons(...args);
                break;
        }
    }

    render() {
        super.render();
    }

    _renderWeapons(weapons) {
        this._updateElement(".weapon-results", resultsHtml(weapons));

        this._registerResultsEvents(weapons);
    }

    _registerResultsEvents(weapons) {
        if (weapons.items.length > 0) {
            this._registerEvent(".btn-prev", "click", () => {
                this.controller.prevPage();
            });

            this._registerEvent(".btn-next", "click", () => {
                this.controller.nextPage();
            });

            this._registerEvent(".buy-button", "click", (e) => {
                const searchResultEl = e.target.closest(".search-result");
                const weaponId = searchResultEl.getAttribute("data-id");
                this.controller.buy(weaponId);
            })
        }
    }
}

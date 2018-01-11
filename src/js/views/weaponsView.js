import AdPropogator from '../../../public/js/AdPropogator.js';
import pageHtml from "../templates/weapons.html.js";

import resultHtml from "../templates/weapons/_result.html.js";
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
                AdPropogator();
                break;
            case "weaponChanged":
                this._renderWeapon(...args);
                break;
        }
    }

    render() {
        super.render();
    }

    _renderWeapons(weapons) {
        this._replaceInnerElement(".weapon-results", resultsHtml(weapons));

        this._registerWeaponsEvents(weapons);
    }

    _renderWeapon(weapon) {
        const selector = `.search-result[data-id='${weapon.id}']`;
        this._replaceElement(selector, resultHtml(weapon));

        this._registerWeaponEvents(weapon);
    }

    _registerWeaponsEvents(weapons) {
        if (weapons.items.length > 0) {
            this._registerEvent(".btn-prev", "click", () => {
                this.controller.prevPage();
            });

            this._registerEvent(".btn-next", "click", () => {
                this.controller.nextPage();
            });

            this._registerEvent(".buy-button", "click", (e) => {
                const id = this._retrieveId(e.target);
                this.controller.buy(id);
            });

            this._registerEvent(".enchantment-checkbox", "click", (e) => {
                const id = this._retrieveId(e.target);
                const state = e.target.checked;
                this.controller.enchant(id, state);
            });
        }
    }

    _retrieveId(srcEl) {
        const parentEl = srcEl.closest("li");
        return parentEl.getAttribute("data-id");
    }

    _registerWeaponEvents(weapon) {
        const parentSelector = `.search-result[data-id='${weapon.id}']`;
        const enchantmentSelector = `${parentSelector} .enchantment-checkbox`;
        this._registerEvent(enchantmentSelector, "click", (e) => {
            const state = e.target.checked;
            this.controller.enchant(weapon.id, state);
        });

        const buyButtonSelector = `.buy-button`;
        this._registerEvent(buyButtonSelector, "click", (e) => {
            this.controller.buy(weapon.id);
        })
    }

    // this._registerEvent(".enchantment-checkbox", "click", (e) => {
    //     const id = this._findId(e.target);
    //     const state = e.target.checked;
    //     this.controller.enchant(id, state);
    // });

}

import "../../css/weapons.css"

import WeaponsController from "../Controllers/WeaponsController.js"
import WeaponsView from "../views/WeaponsView.js"

export default class WeaponsPage {
    constructor(router) {
        this.controller = new WeaponsController(router);
        this.view = new WeaponsView(this.controller);

        window.app.controllers.weapons = this.controller;
        window.app.views.weapons = this.view;
    }

    transition(params) {
        const controller = new WeaponsController()
        const view = new WeaponsView(controller);

        view.render();
        controller.fetchWeapons(params);
    }
}

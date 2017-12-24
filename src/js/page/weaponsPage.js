import '../../css/weapons.css';

import BasePage from './BasePage.js';
import WeaponsController from '../Controllers/WeaponsController.js';
import WeaponsView from '../views/WeaponsView.js';
import WeaponsCollection from '../models/WeaponsCollection.js';

export default class WeaponsPage extends BasePage {
    constructor(router) {
        super();

        this.controller = new WeaponsController(router);
        this.view = new WeaponsView(this.controller);
        this.model = new WeaponsCollection(this.view);
        this.controller.model = this.model;

        this.updateApp();
    }

    transition(params) {
        this.view.render();
        this.controller.fetchWeapons(params);
    }
}

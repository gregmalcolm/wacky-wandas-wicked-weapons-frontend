import '../../css/weapons.css';
import '../../css/weaponsPaging.css';

import BasePage from './BasePage.js';
import WeaponsController from '../Controllers/WeaponsController.js';
import WeaponsView from '../views/WeaponsView.js';
import WeaponsCollection from '../models/WeaponsCollection.js';
import CartItemsCollection from '../models/CartItemsCollection.js';

export default class WeaponsPage extends BasePage {
    constructor(router) {
        super(router);

        this.controller = new WeaponsController(router);
        this.view = new WeaponsView(this.controller);

        this.controller.weapons = new WeaponsCollection(this.view);
        this.controller.cartItems = new CartItemsCollection(this.view);

        this.updateApp("weapons");
    }

    transition(params) {
        this.view.render();
        this.controller.paramsChange(params);
    }
}

import "../../css/weapons.css"

import AppPage from './AppPage.js'
import WeaponsController from "../Controllers/WeaponsController.js"
import WeaponsView from "../views/WeaponsView.js"

export default class WeaponsPage extends AppPage {
    transition(query) {
        const controller = new WeaponsController()
        const view = new WeaponsView(controller);

        view.render();
    }
}

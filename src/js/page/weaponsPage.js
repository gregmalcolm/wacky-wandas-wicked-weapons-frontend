import "../../css/weapons.css"

import AppPage from './AppPage.js'
import WeaponsEvents from "../viewEvents/WeaponsEvents.js"
import WeaponsView from "../views/WeaponsView.js"

export default class WeaponsPage extends AppPage {
    transition() {
        const events = new WeaponsEvents()
        const view = new WeaponsView(events);

        view.render();
    }
}

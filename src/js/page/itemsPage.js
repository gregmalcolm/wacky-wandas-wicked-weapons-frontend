import AppPage from './AppPage.js'
import ItemsEvents from "../viewEvents/ItemsEvents.js"
import ItemsView from "../views/ItemsView.js"

export default class ItemsPage extends AppPage {
    transition() {
        const events = new ItemsEvents()
        const view = new ItemsView(events);

        view.render();
    }
}

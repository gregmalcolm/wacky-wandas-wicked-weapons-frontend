import AppPage from './AppPage.js'
import ItemsController from "../Controllers/ItemsController.js"
import ItemsView from "../views/ItemsView.js"

export default class ItemsPage extends AppPage {
    transition() {
        const controller = new ItemsController()
        const view = new ItemsView(controller);

        view.render();
    }
}

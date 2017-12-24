import AppPage from './AppPage.js'
import IndexController from "../Controllers/IndexController.js"
import IndexView from "../views/IndexView.js"

export default class IndexPage extends AppPage {
    transition() {
        const controller = new IndexController()
        const view = new IndexView(controller);

        view.render();
    }
}

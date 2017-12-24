import BasePage from './BasePage.js'
import IndexController from "../Controllers/IndexController.js"
import IndexView from "../views/IndexView.js"

export default class IndexPage extends BasePage {
     constructor(router) {
        super();

        this.controller = new IndexController(router);
        this.view = new IndexView(this.controller);

        this.updateApp();
    }

    transition() {
        this.view.render();
    }
}

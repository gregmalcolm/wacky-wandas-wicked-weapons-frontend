import '../../css/index.css';

import BasePage from './BasePage.js'
import IndexController from "../Controllers/IndexController.js"
import IndexView from "../views/IndexView.js"

export default class IndexPage extends BasePage {
     constructor(router) {
        super(router);

        this.controller = new IndexController(router);
        this.view = new IndexView(this.controller);

        this.updateApp("index");
    }

    transition() {
        this.view.render();
    }
}

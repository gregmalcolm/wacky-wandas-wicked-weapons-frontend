import '../../css/errors.css';

import BasePage from './BasePage.js'
import ErrorsController from "../controllers/ErrorsController.js"
import ErrorsView from "../views/ErrorsView.js"

export default class ErrorsPage extends BasePage {
    constructor(router) {
        super(router);

        this.controller = new ErrorsController(router);
        this.view = new ErrorsView(this.controller);

        this.updateApp("errors");
    }

    transition() {
        this.view.render();
    }
}

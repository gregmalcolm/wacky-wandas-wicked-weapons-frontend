import BasePage from './BasePage.js'
import AppController from '../controllers/AppController.js'
import AppView from '../views/AppView.js'

export default class AppPage extends BasePage {
    constructor(router) {
        super(router);

        this.controller = new AppController(router);
        this.view = new AppView(this.controller);
        this.view.registerEvents();

        this.updateApp("app");
    }

    transition(params) {
    }
}

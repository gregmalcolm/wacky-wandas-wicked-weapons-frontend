import BasePage from './BasePage.js'
import AppController from '../Controllers/AppController.js'
import AppView from '../views/AppView.js'

export default class AppPage extends BasePage {
    constructor(router) {
        super();

        this.controller = new AppController(router);
        this.view = new AppView(this.controller);

        this.updateApp();
    }
}

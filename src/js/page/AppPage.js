import AppController from '../Controllers/AppController.js'
import AppView from '../views/AppView.js'

export default class AppPage {
    transition() {
        const controller = new AppController();
        const view = new AppView(controller);

        view.render();
    }
}

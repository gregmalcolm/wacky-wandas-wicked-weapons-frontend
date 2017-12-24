import BaseController from './BaseController.js'

export default class AppController extends BaseController {
    transition(oldUrl, newUrl) {
        this.router.tryTransition(oldUrl, newUrl);
    }

    weaponsSearch(params) {
        this.router.transitionTo("/weapons", params);
    }
}

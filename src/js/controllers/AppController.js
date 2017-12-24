import BaseController from './BaseController.js'

export default class AppController extends BaseController {
    transition(oldUrl, newUrl) {
        this.router.tryTransition(oldUrl, newUrl);
    }

    weaponsSearch(query) {
        const params = query || "";
        this.router.transitionTo("/weapons", `q=${params}`);
    }
}

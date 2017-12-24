import Router from '../Router.js'

export default class AppController {
    constructor(router) {
        this.router = router;
    }

    transition(oldUrl, newUrl) {
        this.router.tryTransition(oldUrl, newUrl);
    }

    weaponsSearch(params) {
        this.router.transitionTo("/weapons", params);
    }
}

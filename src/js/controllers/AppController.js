import Router from '../Router.js'

export default class AppController {
    transition(oldUrl, newUrl) {
        new Router().transition(oldUrl, newUrl);
    }

    weaponsSearch(query) {
        new Router().routeTo("/weapons", query);
    }
}

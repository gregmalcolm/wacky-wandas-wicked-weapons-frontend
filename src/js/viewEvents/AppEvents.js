import Router from '../Router.js'

export default class AppEvents {
    transition(oldUrl, newUrl) {
        new Router().transition(oldUrl, newUrl);
    }

    weaponsSearch(query) {
        new Router().routeTo("/weapons", query);
    }
}

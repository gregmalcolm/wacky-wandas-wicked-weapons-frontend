import Router from '../Router.js'

export default class AppEvents {
    onHashChange(e) {
        new Router().transition(e.oldURL, e.newURL);
    }
}

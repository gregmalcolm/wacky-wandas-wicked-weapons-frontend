import IndexPage from './page/IndexPage.js'
import WeaponsPage from './page/WeaponsPage.js'
import ItemsPage from './page/ItemsPage.js'

export default class Router {
    routeTo(route, query) {
        const path = this._extractPath(route);

        const page = this._findPage(path);
        page.transition(query);
    }

    transition(oldUrl, newUrl) {
        const oldPath = this._extractPath(oldUrl);
        const newPath = this._extractPath(newUrl);
        if (oldPath !== newPath) {
            this.routeTo(newUrl)
        }
    }

    _findPage(path) {
        switch(path) {
            case "":
                return new IndexPage();
            case "/weapons":
                return new WeaponsPage();
            case "/items":
                return new ItemsPage();
            default:
                console.error("Unknown page");
        }
    }

    _extractPath(route) {
        if (route) {
            const path = route
                .replace(/.*#([^?]*).*/,"$1")
                .replace(/\/$/, "");
            return path;
        }
    }
}

import AppPage from './page/AppPage.js'
import IndexPage from './page/IndexPage.js'
import WeaponsPage from './page/WeaponsPage.js'
import ItemsPage from './page/ItemsPage.js'

export default class Router {
    constructor() {
        this.pages = {};

        this.pages.app = new AppPage(this);
        this.pages.index = new IndexPage(this);
        this.pages.weapons = new WeaponsPage(this);
        this.pages.items = new ItemsPage(this);

        window.app.pages = this.pages;
    }

    routeTo(route, params) {
        const path = this._extractPath(route);

        const page = this._findPage(path);
        page.transition(params);
    }

    transitionTo(route, params) {
        location.hash = `${route}?${params}`
    }

    tryTransition(oldUrl, newUrl) {
        const oldPath = this._extractPath(oldUrl);
        const newPath = this._extractPath(newUrl);
        if (oldPath !== newPath) {
            this.routeTo(newUrl)
        }
    }

    _findPage(path) {
        switch(path) {
            case "":
                return this.pages.index;
            case "/weapons":
                return this.pages.weapons;
            case "/items":
                return this.pages.items;
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

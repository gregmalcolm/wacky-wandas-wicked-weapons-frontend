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
        const page = this._findPage(route);
        page.transition(params);
    }

    routeToUrl(url) {
        const route = this._extractRoute(url);
        const params = this._extractParamsObject(url);
        this.routeTo(route, params);
    }

    transitionTo(route, params) {
        location.hash = `${route}?${params}`
    }

    tryTransition(oldUrl, newUrl) {
        const oldPath = this._extractRoute(oldUrl);
        const newPath = this._extractRoute(newUrl);
        const paramsObject =  this._extractParamsObject(newUrl);
        if (newPath !== oldPath) {
            this.routeTo(newUrl, params)
        } else if (newUrl !== oldUrl){
            if (page) {
                page.controller.paramsChange(paramsObject);
            }
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

    _extractRoute(url) {
        if (url) {
            const path = url
                .replace(/.*#([^?]*).*/,"$1")
                .replace(/\/$/, "");
            return path;
        }
    }

    _extractParamsObject(url) {
        if (url) {
            const paramsString = url.replace(/.*\?(.*)/,"$1") || "";
            return this._paramsAsObject(paramsString);
        } else {
            return {};
        }
    }

    _paramsAsObject(paramsString) {
        return paramsString
            .split("&")
            .reduce((acc, item)=>{
                const kv=item.split("=");
                acc[kv[0]]=kv[1];
                return acc;
            }, {});
    }
}

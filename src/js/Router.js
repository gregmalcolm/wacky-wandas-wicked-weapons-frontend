import AppPage from './page/AppPage.js'
import IndexPage from './page/IndexPage.js'
import WeaponsPage from './page/WeaponsPage.js'
import ItemsPage from './page/ItemsPage.js'
import ErrorsPage from './page/ErrorsPage.js'

export default class Router {
    constructor() {
        this.page = null;
        this.pages = {};

        this.pages.app = new AppPage(this);
        this.pages.index = new IndexPage(this);
        this.pages.weapons = new WeaponsPage(this);
        this.pages.items = new ItemsPage(this);
        this.pages.errors = new ErrorsPage(this);

        window.app.pages = this.pages;
    }

    routeTo(route, params) {
        this.page = this._findPage(route);
        this.page.transition(params || {});
    }

    routeToUrl(url) {
        const route = this._extractRoute(url);
        const params = this._extractParamsObject(url);
        this.routeTo(route, params);
    }

    transitionTo(route, params) {
        location.hash = `${route}?${this._paramsAsString(params)}`
    }

    tryTransition(oldUrl, newUrl) {
        const oldRoute = this._extractRoute(oldUrl);
        const newRoute = this._extractRoute(newUrl);
        const paramsObject =  this._extractParamsObject(newUrl);
        this.routeTo(newRoute, paramsObject)
    }

    _findPage(route) {
        switch(route) {
            case "":
                return this.pages.index;
            case "/weapons":
                return this.pages.weapons;
            case "/items":
                return this.pages.items;
            case "/errors":
                return this.pages.errors;
            default:
                console.error(`Router error: unknown page ${route}`);
                debugger;
        }
    }

    _extractRoute(url) {
        if (url) {
            if (url.search("#") >= 0) {
                const route = url
                    .replace(/.*#([^?]*).*/,"$1")
                    .replace(/\/$/, "");
                return route;
            } else {
                return "";
            }
        }
    }

    _extractParamsObject(url) {
        if (url && url.search(/\?/) >=  0) {
            const paramsString = url
                .replace(/.*\?(.*)/,"$1") || "";
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

    _paramsAsString(params) {
        if (typeof params !== "string") {
            if (params) {
                params = Object.keys(params)
                    .map((key) => `${key}=${params[key]}`)
                    .join("&")
            } else {
                params = "";
            }
        }
        return params;
    }
}

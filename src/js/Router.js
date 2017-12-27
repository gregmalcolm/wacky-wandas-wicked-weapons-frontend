import AppPage from './page/AppPage.js'
import IndexPage from './page/IndexPage.js'
import WeaponsPage from './page/WeaponsPage.js'
import ItemsPage from './page/ItemsPage.js'

export default class Router {
    constructor() {
        this.page = null;
        this.pages = {};

        this.pages.app = new AppPage(this);
        this.pages.index = new IndexPage(this);
        this.pages.weapons = new WeaponsPage(this);
        this.pages.items = new ItemsPage(this);

        window.app.pages = this.pages;
    }

    routeTo(route, params) {
        this.page = this._findPage(route);
        this.page.transition(params);
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
        const oldRoute = this._extractRoute(oldUrl);
        const newRoute = this._extractRoute(newUrl);
        const paramsObject =  this._extractParamsObject(newUrl);
        //if (newRoute !== oldRoute) {
            this.routeTo(newRoute, paramsObject)
        //} else if (newUrl !== oldUrl){
            //if (this.page) {
                //this.page.controller.paramsChange(paramsObject);
            //}
        //}
    }

    _findPage(route) {
        switch(route) {
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
        if (url && url.search("q") >=  0) {
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
}

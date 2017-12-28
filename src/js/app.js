import '../css/style.css';
import '../css/header.css';

import Router from './Router.js'

window.app = {
    router: null,
    pages: {},
    views: {},
    controllers: {}
};
app.router = new Router();

app.router.routeToUrl(window.location.href);


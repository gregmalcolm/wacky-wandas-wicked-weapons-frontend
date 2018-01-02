import '../css/style.css';
import '../css/header.css';
import '../css/head-spin.css';

import Router from './Router.js';
window.app = {
    router: null,
    pages: {},
    views: {},
    controllers: {},
    models: {}
};
app.router = new Router();

app.router.routeToUrl(window.location.href);

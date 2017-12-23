import '../css/style.css';
import '../css/header.css';

import Router from './Router.js'

const router = new Router();
router.routeTo(window.location.hash);


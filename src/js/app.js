import '../css/style.css';
import '../css/header.css';

import indexPage from '../js/page/indexPage.js'
import weaponsPage from '../js/page/weaponsPage.js'
import itemsPage from '../js/page/itemsPage.js'

const template = document.querySelector("body")
    .getAttribute("data-template");

const pageLoader = () => {
    switch(template) {
        case "index":
            return indexPage();
        case "weapons":
            return weaponsPage();
        case "items":
            return itemsPage();
    };
    console.error("Unknown page");
}

pageLoader();

import '../css/style.css';
import indexPage from '../js/page/index.js'
import weaponsPage from '../js/page/weapons.js'
import itemsPage from '../js/page/items.js'

const template = document.querySelector("body")
    .getAttribute("data-template");

const pageLoader = () => {
    switch(template) {
        case "index.html":
            return indexPage();
        case "weapons.html":
            return weaponsPage();
        case "ttems.html":
            return itemsPage();
    };
    console.error("Unknown page");
}

pageLoader();

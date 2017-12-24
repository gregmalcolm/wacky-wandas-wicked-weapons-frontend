import BaseView from "./BaseView.js";

export default class AppView extends BaseView {
    registerEvents() {
	    window.addEventListener("hashchange", (e) => {
            this.controller.transition(e.oldURL, e.newURL);
        });

        this._registerEvent(".weapons-search", "submit", (e) => {
            e.preventDefault();
            const inputEl = e.currentTarget.querySelector(".weapons-search__input");
            this.controller.weaponsSearch(inputEl.value);
        });
    }
}

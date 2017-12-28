import Model from './Model.js';

export default class Collection {
    constructor(view, items) {
        this.view = view;
        this.items = items;
        this.params = {};
    }

    notifyView(updateType, ...args) {
        if (this.view) {
            this.view.modelChanged(updateType, args);
        }
    }

    getSearchText() {
        const params = this.params || {};
        return params.q || "";
    }

    prevPage() {
        let page = parseInt(this.params.page || 1)
        if (page > 1) {
            page -= 1;
        }
        this.params.page = page.toString();
    }

    nextPage() {
        let page = parseInt(this.params.page || 1)
        this.params.page = (page + 1).toString();
    }

}

import Model from './Model.js';

export default class Collection {
    constructor(view, items) {
        view = items
        this.items = items;
    }

    notifyView(...args) {
        if (this.view) {
            this.view.modelChanged(updateType, args);
        }
    }
}

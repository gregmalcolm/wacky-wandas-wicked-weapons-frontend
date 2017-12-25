import Model from './Model.js';

export default class Collection {
    constructor(view, items) {
        this.view = view;
        this.items = items;
    }

    notifyView(updateType, ...args) {
        if (this.view) {
            this.view.modelChanged(updateType, args);
        }
    }
}

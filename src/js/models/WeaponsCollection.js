import Weapon from './Weapon.js';
import Collection from './Collection.js';
import Pagination from './Pagination.js';

export default class WeaponsCollection extends Collection {
    constructor(view, items) {
        super(view, items);

        this.pagination = new Pagination();
    }

    addJsonItems(data) {
        if (data) {
            this.items = data.map((json) => {
                const attributes = Object.assign({id: json.id}, json.attributes)
                return new Weapon(attributes);
            });
            this.pagination.updateFromResponseLinks(data.links);
            this.notifyView("itemsChanged", this);
        } else {
            console.error("json data is not present");
        }
    }


}

import Weapon from './Weapon.js';
import Collection from './Collection.js';

export default class WeaponsCollection extends Collection {
    addJsonItems(data) {
        this.items = data.map((json) => {
            const attributes = Object.assign({id: json.id}, json.attributes)
            return new Weapon(attributes);
        });
        this.notifyView("itemsChanged", this.items);
    }
}

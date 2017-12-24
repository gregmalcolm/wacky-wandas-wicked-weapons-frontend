import Weapon from './Weapon.js';
import Collection from './Collection.js';

export default class WeaponsCollection {
    addJsonItems(data) {
        this.items = data.map((json) => {
            console.log(json);
            debugger;
            const attributes = {
                id: json.id,
                ...json.attributes
            };
            return new Weapon(attributes);
        });
        this.notifyView("itemsChanged", items);
    }
}

import CartItem from './CartItem.js';
import Collection from './Collection.js';

export default class CartItemsCollection extends Collection {
    constructor(view, items) {
        super(view, items);
    }

    load() {
    }

    find(weaponId) {
        return this.items.find((item) =>
            item.weaponId === weaponId);
    }

    addItem(weapon) {
        const cartItem = this.find(weapon.id);
        if (cartItem) {
            this._adjustItemQuantity(cartItem, 1);
        } else {
            this._createItem(weapon);
        }
    }

    _adjustItemQuantity(cartItem, quantity) {
        cartItem.quantity += quantity;
        if (!cartItem.save()) {
            cartItem.quantity -= 1;
            console.error(`Unable to update the cart for weapon#${cartItem.weaponId}`);
        }
    }

    _createItem(weapon) {
        const cartItem = new CartItem({
            weaponId: weapon.id,
            name: weapon.name,
            imageUrl: weapon.imageUrl,
            baseCost: weapon.cost
        });
        if (cartItem.save()) {
            this.items.push(cartItem);
        } else {
            console.error(`Unable to add weapon#${weapon.id} to the cart`);
        }
    }
}

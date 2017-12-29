import CartItem from './CartItem.js';
import Collection from './Collection.js';

export default class CartItemsCollection extends Collection {
    constructor(view, items) {
        super(view, items);
    }

    refresh() {
        const cartData = JSON.parse(localStorage.cart || "[]");

        this.items = cartData.map((item) =>
            new CartItem({
                weaponId: item.weaponId,
                name: item.name,
                imageUrl: item.imageUrl,
                baseCost: item.baseCost,
                quantity: item.quantity
            })
        );
    }

    find(weaponId) {
        return this.items.find((item) =>
            item.weaponId === weaponId);
    }

    addItem(weapon) {
        this.refresh();
        let cartItem = this.find(weapon.id);
        if (cartItem) {
            this._adjustItemQuantity(cartItem, 1);
        } else {
            cartItem = this._createItem(weapon);
        }
        return cartItem;
    }

    removeItem(weaponId) {
        const cartItem = this.find(weaponId);
        if (cartItem) {
            cartItem.drop();
            this.items = this.items.filter((item) => item.weaponId !== weaponId)
        } else {
            console.info(`Couldn't remove item#${weaponId}. Some taffer has made off with it!`);
        }
    }

    calculateTotal() {
        return this.items.reduce((total, item) =>
            total + (item.baseCost * item.quantity)
        ,0);
    }

    calculateTotalInCoins() {
        const total = this.calculateTotal();
        if (total >= 100) {
            return total/100;
        } else if (total >= 10){
            return total/10;
        } else {
            return total;
        }
    }

    getTotalCurrency() {
        const total = this.calculateTotal();
        if (total >= 100) {
            return "gp";
        } else if (total >= 10){
            return "sp";
        } else {
            return "cp";
        }
    }

    sumOfItems() {
        return this.items.reduce((sum, item) =>
           sum + item.quantity
        ,0);
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
            return cartItem;
        } else {
            console.error(`Unable to add weapon#${weapon.id} to the cart`);
            return null;
        }
    }
}

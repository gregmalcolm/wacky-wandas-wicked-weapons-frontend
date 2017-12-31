import Model from './Model.js'

export default class CartItem extends Model {
    constructor(attr, collection) {
        super(attr, collection);
        this._weaponId = attr.weaponId;
        this._name = attr.name;
        this._imageUrl = attr.imageUrl;
        this._baseCost = attr.baseCost;
        this._quantity = attr.quantity || 1;
    }

    get weaponId() {
        return this._weaponId;
    }
    set weaponId(weaponId) {
        this._weaponId = weaponId;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }

    get imageUrl() {
        return this._imageUrl;
    }
    set imageUrl(imageUrl) {
        this._imageUrl = imageUrl;
    }

    get baseCost() {
        return this._baseCost;
    }
    set baseCost(baseCost) {
        this._baseCost = baseCost;
    }

    get quantity() {
        return this._quantity;
    }
    set quantity(quantity) {
        this._quantity = quantity;
        this.save();
    }

    calculateCost() {
        return this.baseCost;
    }

    costInCoins() {
        const cost = this.calculateCost();
        if (cost >= 100) {
            return cost/100;
        } else if (cost >= 10){
            return cost/10;
        } else {
            return cost;
        }
    }

    costCurrency() {
        const cost = this.calculateCost();
        if (cost >= 100) {
            return "gp";
        } else if (cost >= 10){
            return "sp";
        } else {
            return "cp";
        }
    }

    save() {
        const cartData = JSON.parse(localStorage.cart || "[]")
            .filter((item) => item.weaponId !== this._weaponId);
        cartData.push({
            weaponId: this.weaponId,
            name: this.name,
            imageUrl: this.imageUrl,
            baseCost: this.baseCost,
            quantity: this.quantity
        });
        return this._writeToLocalStorage(cartData);
    }

    drop() {
        const cartData = JSON.parse(localStorage.cart || "[]")
            .filter((item) => item.weaponId !== this._weaponId);
        return this._writeToLocalStorage(cartData);
    }

    _writeToLocalStorage(cartData) {
        const sortedData = cartData.sort((a, b) => a.name > b.name);
        localStorage.cart = JSON.stringify(sortedData);
        return localStorage.cart;
    }
}

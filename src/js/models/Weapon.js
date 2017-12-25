import Model from './Model.js'

import imageManifest from '../../../public/images/weapons/manifest.json'

export default class Weapon extends Model {
    constructor(attr) {
        super(attr);
        this._id = attr.id;
        this._name = attr.name;
        this._category = attr.category;
        this._subcategory = attr.subcategory;
        this._cost = attr.cost;
        this._damage = attr.damage;
        this._range = attr.range;
        this._weight = attr.weight;
        this._imageUrl = attr.imageUrl;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get damage() {
        return this._damage;
    }

    get weight() {
        return this._weight;
    }

    getRange() {
        return this._range ? `${this._range} lb` : "-"
    }

    getImageUrl() {
        if (this._imageUrl) {
            return this._imageUrl;
        } else {
            return this._placeholderImageUrl();
        }
    }

    getCostInCoins() {
        if (this._cost >= 100) {
            return this._cost/100;
        } else if (this.cost >= 10){
            return this._cost/10;
        } else {
            return this._cost;
        }
    }

    getCostCurrency() {
        if (this._cost >= 100) {
            return "gp";
        } else if (this.cost >= 10){
            return "sp";
        } else {
            return "cp";
        }
    }

    _placeholderImageUrl() {
        const manifest = imageManifest;
        const imageNum = this._id % manifest.length;
        return `/images/weapons/${manifest[imageNum]}`
    }
}

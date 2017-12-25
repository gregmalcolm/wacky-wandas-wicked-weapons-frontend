import Model from './Model.js'

import imageManifest from '../../../public/images/weapons/manifest.json'

export default class Weapon extends Model {
    constructor(attr) {
        super(attr);
        this._id = attr.id;
        this._name = attr.name;
        this._category = attr.category;
        this._subcategory = attr.subcategory;
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

    get imageUrl() {
        if (this._imageUrl) {
            return this._imageUrl;
        } else {
            return this._placeholderImageUrl();
        }
    }

    _placeholderImageUrl() {
        const manifest = imageManifest;
        const imageNum = this._id % manifest.length;
        return `/images/weapons/${manifest[imageNum]}`
    }
}

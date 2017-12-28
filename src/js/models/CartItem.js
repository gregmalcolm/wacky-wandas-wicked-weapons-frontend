import Model from './Model.js'

export default class CartItem extends Model {
    constructor(attr) {
        super(attr);
        this._id = attr.id;
        this._name = attr.name;
        this._cost = attr.cost;
        this._imageUrl = attr.imageUrl;
        this._quantity = attr.quanity;
    }

}

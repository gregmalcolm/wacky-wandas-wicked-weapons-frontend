import BaseController from './BaseController.js'

export default class ItemsController extends BaseController {
    removeCartItem(weaponId) {
        this.cart.removeItem(weaponId);
    }
}

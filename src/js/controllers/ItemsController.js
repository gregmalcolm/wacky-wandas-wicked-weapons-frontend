import BaseController from './BaseController.js'

export default class ItemsController extends BaseController {
    removeCartItem(weaponId) {
        this.cart.removeItem(weaponId);
    }

    updateCartItemQuantity(weaponId, quantity) {
        const numericQuantity = parseInt(quantity);
        if (numericQuantity === 0) {
            this.cart.removeItem(weaponId);
        } else if (numericQuantity > 0 ) {
            this.cart.updateItemQuantity(weaponId, numericQuantity);
        } else {
            console.log(`ItemsController updateCartItemQuantity(): Ignoring quantity of "${quantity}"`);
        }
    }
}

import pageTemplate from "../templates/items.html.js";

import BaseView from "./BaseView.js"

export default class ItemsView extends BaseView {
    constructor(controller) {
        super(controller);

        this.template = "";
    }

    render(cart) {
        this.template = pageTemplate(cart);
        super.render();
    }

    registerEvents() {
        super.registerEvents();
        this._registerEvent(".cart-remove-link", "click", (e) => {
            e.preventDefault();

            const weaponId = e.target.getAttribute("data-weapon-id");
            this.controller.removeCartItem(weaponId);
        });

        this._registerEvent(".cart-quantity-input", "input", (e) => {
            const weaponId = e.target.getAttribute("data-weapon-id");
            const quantity = e.target.value;
            this.controller.updateCartItemQuantity(weaponId, quantity);
        });
    }

    modelChanged(event, args) {
        switch(event) {
            case "cartItemRemoved":
                this._onCartItemRemoved(...args);
                break;
            case "quantityChanged":
                this._onQuantityChanged(...args);
                break;
        }
    }

    _onCartItemRemoved(cart, weaponId) {
        this.render(cart);
    }

    _onQuantityChanged(cart, weaponId, quantity) {
        const subtotalTextEl =
            document.querySelector(".cart-cell__name.cart-cell__total")
        const subtotalValueEl =
            document.querySelector(".cart-cell__cost.cart-cell__total")

        subtotalTextEl.innerHTML =
            `Subtotal (${cart.sumOfItems()} items)`;
        subtotalValueEl.innerHTML =
            `${cart.calculateTotalInCoins()} <span class="currency-${cart.getTotalCurrency()}">${cart.getTotalCurrency()}</span>`;
    }

}

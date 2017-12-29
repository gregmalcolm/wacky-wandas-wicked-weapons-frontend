const cartTemplate = (cart) => {
    const items = cart.items;
    return `
        <div class="cart">
            <h3>Cart Items</h3>
            <div class="cart-table";>
                ${items.map((item) => `
                    <div class="cart-cell cart-cell__head cart-cell__image">
                        <img src="${item.imageUrl}" alt="${item.imageUrl}">
                    </div>
                    <div class="cart-cell cart-cell__name">
                        ${item.name}
                    </div>
                    <div class="cart-cell cart-cell__cost">
                        ${item.costInCoins()} <span class="currency-${item.costCurrency()}">${item.costCurrency()}</span>
                    </div>
                    <div class="cart-cell cart-cell__quantity">
                        <input type="number" value="${item.quantity}" size="3" data-weapon-id="${item.weaponId}">
                    </div>
                    <div class="cart-cell cart-cell__foot cart-cell__remove">
                        <a class="cart-remove-link" href="#" data-weapon-id="${item.weaponId}">remove</a>
                    </div>
                    `
                ).join("")}
                <div class="cart-cell cart-cell__head cart-cell__image cart-cell__total"></div>
                <div class="cart-cell cart-cell__name cart-cell__total">
                    Subtotal (${cart.sumOfItems()} items)
                </div>
                <div class="cart-cell cart-cell__cost cart-cell__total">
                    ${cart.calculateTotalInCoins()} <span class="currency-${cart.getTotalCurrency()}">${cart.getTotalCurrency()}</span>
                </div>
                <div class="cart-cell cart-cell__quantity cart-cell__total"></div>
                <div class="cart-cell cart-cell__foot cart-cell__total cart-cell__remove"></div>
            </div>
        </div>`;
}
export default cartTemplate;

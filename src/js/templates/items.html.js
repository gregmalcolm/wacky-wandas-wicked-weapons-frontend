import cartTemplate from './items/_cart.html.js';
import noItemsTemplate from './items/_noItems.html.js';

const itemsTemplate = (cart) => {
    if (cart && cart.items.length > 0) {
        return cartTemplate(cart);
    } else {
        return noItemsTemplate();
    }
};

export default itemsTemplate;

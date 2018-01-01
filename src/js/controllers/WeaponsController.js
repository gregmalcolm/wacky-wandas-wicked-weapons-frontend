import BaseController from './BaseController.js'

export default class WeaponsController extends BaseController {
    paramsChange(params) {
        super.paramsChange(params);
        this.fetchWeapons(params);
    }

    fetchWeapons(params) {
        this._fetchWeaponsAsync(params)
            .then(result => {
                this.weapons.params = params;
                this.weapons.addJsonItems(result);
            })
            .catch(reason => {
                console.error("Weapons ajax problem:\n", reason)
                this.router.transitionTo("/errors");
            });
    }

    prevPage() {
        this.weapons.prevPage();

        this.router.transitionTo("/weapons", this.weapons.params);
    }

    nextPage() {
        this.weapons.nextPage();

        this.router.transitionTo("/weapons", this.weapons.params);
    }

    buy(weaponId) {
        const weapon = this.weapons.find(weaponId);
        if (weapon) {
            const cartItem = this.cart.addItem(weapon);
            if (cartItem) {
                this.router.transitionTo("/items", this.weapons.params);
            }

        } else {
            console.error(`WeaponsController.buy(): Can't find weapon for id ${weaponId}`);
        }
    }

    enchant(weaponId, state) {
        const weapon = this.weapons.find(weaponId);

        weapon.enchanted = state;      
    }

    async _fetchWeaponsAsync(params) {
        const searchParams = this._searchParams(params);
        const response = await fetch(`/api/weapons?${searchParams}`);

        const data = response.json();
        return data;
    }

    _searchParams(params) {
        const query = [];
        if (params.q) {
            query.push(`like_name=${params.q}`);
        }
        if (params.page) {
            query.push(`page[number]=${params.page}`);
        }
        return query.join("&");
    }
}

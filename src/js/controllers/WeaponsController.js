import BaseController from './BaseController.js'

export default class WeaponsController extends BaseController {
    paramsChange(params) {
        super.paramsChange(params);
        this.fetchWeapons(params);
    }

    fetchWeapons(params) {
        this._fetchWeaponsAsync(params)
            .then(result => {
                this.model.params = params;
                this.model.addJsonItems(result);
            })
            .catch(reason => console.error(reason.message));
    }

    prevPage() {
        this.model.prevPage();

        this.router.transitionTo("/weapons", this.model.params);
    }

    nextPage() {
        this.model.nextPage();

        this.router.transitionTo("/weapons", this.model.params);
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

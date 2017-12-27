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
                this.model.addJsonItems(result.data);
            })
            .catch(reason => console.error(reason.message));
    }

    async _fetchWeaponsAsync(params) {
        const searchParams = this._searchParams(params);
        const response = await fetch(`/api/weapons?${searchParams}`);

        const data = response.json();
        return data;
    }

    _searchParams(params) {
        return `like_name=${params.q || ""}`;
    }
}

import BaseController from './BaseController.js'

export default class WeaponsController extends BaseController {
    fetchWeapons(params) {
        debugger;
        this._fetchWeaponsAsync(params)
            .then(result => console.log(result))
            .catch(reason => console.error(reason.message));
    }

    async _fetchWeaponsAsync(params) {
        const response = await fetch(`http://localhost:4000/weapons?${params}`);

        debugger;
        const data = respons.json();
        return data;
    }
}

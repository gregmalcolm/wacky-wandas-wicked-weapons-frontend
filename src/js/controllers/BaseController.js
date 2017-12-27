export default class BaseController {
    constructor(router) {
        this.router = router;
        this.params = "";
    }

    paramsChange(params) {
        this.prevParams = this.params;
        this.params = params;
    }

    searchText() {
        const params = this.params || {};
        return params.q || "";
    }
}

export default class BaseController {
    constructor(router, view) {
        this.router = router;
        this.params = "";
    }

    paramsChange(params, view) {
        this.prevParams = this.params;
        this.params = params;
    }
}

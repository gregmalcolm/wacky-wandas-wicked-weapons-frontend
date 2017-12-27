export default class Pagination {
    constructor() {
        this.page = 1;
        this.size = 25;
        this.numOfPages = 1;
        this.hasPrev = false;
        this.hasNext = false;
    }

    updateFromResponseLinks(links) {
        if (links) {
            const selfUrl=decodeURIComponent(links.self);
            const lastUrl=decodeURIComponent(links.last);
            const prevUrl=decodeURIComponent(links.prev);
            const nextUrl=decodeURIComponent(links.next);

            this.page = this._extractQueryParamValue(selfUrl, "page\\[number\\]");
            this.pageSize = this._extractQueryParamValue(selfUrl, "page\\[size\\]");
            this.numOfPages = this._extractQueryParamValue(lastUrl, "page\\[Number\\]");
            this.hasPrev = !!this.prevUrl;
            this.hasNext = !!this.nextUrl;
        }
    }

    _extractQueryParamValue(url, key) {
        let value = null;

        if (url) {
            const pattern = new Regexp(key + "=(\\d*)");
            const matches = url.match(pattern);
            value = (matches.size) >= 2 ? parseInt(matches[1]) : null;
        }

        return value;
    }
}

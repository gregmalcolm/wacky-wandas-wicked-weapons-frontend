const resultsInfoTemplate = (weapons) => {
    const p = weapons.pagination || {};
    return `
        <div class="results-info">
            <div class="stats">
                Search results for "${weapons.getSearchText()}"
            </div>
            <div class="btn-group page-buttons">
                <button class="btn btn-prev ${!p.hasPrev ? "btn-disabled" : ""}"
                    ${!p.hasPrev ? "disabled": ""}>
                    <img src="/images/prev.png" alt="prev">
                </button>
                <button class="btn btn-next ${!p.hasNext ? "btn-disabled" : ""}"
                    ${!p.hasNext ? "disabled": ""}>
                    <img src="/images/next.png" alt="next">
                </button>
            </div>
            <div class="page-pos">Page ${p.page} of ${p.numOfPages}</div>
        </div>`
};
export default resultsInfoTemplate;

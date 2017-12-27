const resultsInfoTemplate = (weapons) => `
    <div class="results-info">
        <div class="results-info__stats">
            Search results for "${weapons.getSearchText()}"
        </div>
        <div class="results-info__pagination">
            <span>Page ${weapons.pagination.page} of ${weapons.pagination.numOfPages}</span>
            <div></div>
        </div>
    </div>
`;
export default resultsInfoTemplate;

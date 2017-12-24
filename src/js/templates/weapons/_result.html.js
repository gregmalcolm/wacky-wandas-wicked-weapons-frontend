const resultTemplate = () => `
    <li class="search-result" data-id="1">
        <div class="search-result-item">
            <div class="search-result__image-column column">
                <a href="#">
                    <img class="search-result__image" src="/images/weapons/axe1.jpeg" alt="axe">
                </a>
            </div>
            <div class="search-result__details-column column">
                <a class="result-details__title" href="#">
                    <h3 class="result-details__title-header">
                        Axe, throwing
                    </h3>
                </a>
                <div class="result_details__info column">
                    <div class="result_details_info__main_column column">
                        <dl class="result_details__info__specifics">
                            <dt>Costs</dd>
                            <dd>8 <span class="gold-pieces">gp</span>
                            <dt>Damage</dt>
                            <dd>1d4</dd>

                            <dt>Range</dt>
                            <dd>10 Ft</dd>

                            <dt>Weight</dt>
                            <dd>2 lb</dd>
                        </dl>
                        <button>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    </li>
    `;
export default resultTemplate;

const resultTemplate = () => `
    <li data-id="1">
        <div class="search-result">
            <div class="search-result__image-column column">
                <a href="#">
                    <img class="search-result__image" src="/images/weapons/axe1.jpeg" alt="axe">
                </a>
            </div>
            <div class="search-result__details-column column">
                <a href="#">
                    <h3 result-details__title>
                        Axe, throwing
                    </h3>
                </a>
                <div class="result_details__info col">
                    <div class="result_details_info__main_column column">
                        <div class="results_details__info__cost">
                            8 gold pieces
                        </div>
                        <dl class="result_details__info__specifics">
                            <dt>Damage</dt>
                            <dd>1d4</dd>

                            <dt>Range</dt>
                            <dd>10 Feet</dd>

                            <dt>Weight</dt>
                            <dd>2 pounds</dd>
                        </dl>
                    </div>
                    <div class="results_details__info__purchase_column column">
                        <button>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    </li>
    `;
export default resultTemplate;

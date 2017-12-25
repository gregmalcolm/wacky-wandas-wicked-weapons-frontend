const resultTemplate = (weapon) => `
    <li class="search-result" data-id="${weapon.id}">
        <div class="search-details">
            <a class="result-details__title" href="#">
                <h3 class="result-details__title-header">
                    ${weapon.name}
                </h3>
            </a>
            <a href="#">
                <img class="search-result__image" src="${weapon.getImageUrl()}" alt="${weapon.name}">
            </a>
            <dl class="result_details__info__specifics">
                <dt>Costs:</dd>
                <dd>${weapon.getCostInCoins()} <span class="currency-${weapon.getCostCurrency()}">${weapon.getCostCurrency()}</span>
                <dt>Damage:</dt>
                <dd>${weapon.damage}</dd>

                <dt>Range:</dt>
                <dd>${weapon.getRange()}</dd>

                <dt>Weight:</dt>
                <dd>${weapon.weight} lb</dd>
            </dl>
            <button class="buy-button" type="button">Buy!</button>
        </div>
    </li>
    `;
export default resultTemplate;

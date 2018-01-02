const resultTemplate = (weapon) => `
    <li class="search-result ${weapon.enchanted ? "enchanted" : ""}" data-id="${weapon.id}">
        <div class="search-details">
            <h3 class="result-details__title-header">
                ${weapon.name}
            </h3>
            <img class="search-result__image" src="${weapon.imageUrl}" alt="${weapon.name}">
            <dl class="result_details__info__specifics">
                <dt>Costs:</dd>
                <dd>${weapon.costInCoins()} <span class="currency-${weapon.costCurrency()}">${weapon.costCurrency()}</span>
                <dt>Damage:</dt>
                <dd>${weapon.damage}</dd>

                <dt>Range:</dt>
                <dd>${weapon.rangeText()}</dd>

                <dt>Weight:</dt>
                <dd>${weapon.weight} lb</dd>
            </dl>

            <button class="buy-button" type="button">Buy!</button>
            <!--
            <div class="search-result__enchanted">
                <label>Add enchantment
                    <input class="enchantment-checkbox" type="checkbox"
                        ${weapon.enchanted ? "checked" : ""}>
                </label>
            </div>
            -->
        </div>
    </li>
`;
export default resultTemplate;

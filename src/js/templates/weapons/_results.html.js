import resultHtml from "./_result.html.js";
import resultsInfoHtml from "./_resultsInfo.html.js";
import criticalFailureHtml from "./_criticalFailure.html.js";

const resultsTemplate = (weapons) => {
    const weaponsHtml = weapons.items.reduce((acc, weapon) =>
        acc + resultHtml(weapon), "");

    if (weapons.items.length > 0) {
        return `
            <header class="weapons-header">
                ${resultsInfoHtml(weapons)}
            </header>
            <ul class="weapons-list">
                ${weaponsHtml}
            </ul>
            <footer class="weapons-footer">
                ${resultsInfoHtml(weapons)}
            </footer>
        `
    } else {
        return criticalFailureHtml();
    }
};

export default resultsTemplate;

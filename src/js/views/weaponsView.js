import resultsTemplate from "../templates/weapons/_result.js";
export default class WeaponsView {
    render() {
        const el = document.querySelector(".weapons-list");

        el.innerHTML = resultsTemplate()
            + resultsTemplate()
            + resultsTemplate()
            + resultsTemplate();
    }
}

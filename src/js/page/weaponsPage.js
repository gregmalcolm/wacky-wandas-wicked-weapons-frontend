import "../../css/weapons.css"
import WeaponsView from "../views/weaponsView.js"

const weaponsPage = () => {
    const view = new WeaponsView();

    view.render();
}

export default weaponsPage;

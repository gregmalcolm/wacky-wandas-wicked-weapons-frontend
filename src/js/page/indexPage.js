import AppPage from './AppPage.js'
import IndexEvents from "../viewEvents/IndexEvents.js"
import IndexView from "../views/IndexView.js"

export default class IndexPage extends AppPage {
    transition() {
        const events = new IndexEvents()
        const view = new IndexView(events);

        view.render();
    }
}

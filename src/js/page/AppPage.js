import AppEvents from '../viewEvents/AppEvents.js'
import AppView from '../views/AppView.js'

export default class AppPage {
    transition() {
        const events = new AppEvents();
        const view = new AppView(events);

        view.render();
    }
}

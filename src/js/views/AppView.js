export default class AppView {
    constructor(events) {
        this.template = "";

        this.events = events;
        this.registerEvents();
    }

    registerEvents() {
	    window.addEventListener("hashchange", this.events.onHashChange, false);
    }

    render() {
        const contentEl = document.querySelector(".content");
        contentEl.innerHTML = this.template;
    }
}

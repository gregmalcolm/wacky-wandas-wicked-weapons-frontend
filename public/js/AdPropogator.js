import wanda from './wanda.js';
import ImOnABoat from './ImOnABoat.js';
import junk from './junk.js';

const adPropogator = () => {
    document.addEventListener("click", ()=> {});
    const button = document.querySelector("body ul li .buy-button");
    if (button) {
        button.addEventListener("click", ()=> {});
        button.addEventListener("click", ()=> {});
    }
    wanda();
    ImOnABoat();
    junk();
}
export default adPropogator;

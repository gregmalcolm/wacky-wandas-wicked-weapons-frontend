const junk = () => {
    document.addEventListener("click", ()=> {});
    document.addEventListener("click", ()=> {});
    const button = document.querySelector("button.buy-button");
    if (button) {
        button.addEventListener("click", ()=> {});
    }
}

export default junk;

const loadPreloader = (parent,markup) => {
    parent.insertAdjacentHTML('afterbegin', markup);
}
export {loadPreloader};
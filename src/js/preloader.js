const loadHTML = (parent,markup) => {
    parent.insertAdjacentHTML('afterbegin', markup);
}
export default loadHTML;
const displayDiv = document.querySelector('.displayDiv');
const itemsCounter = document.querySelector('.itemsCounter');

const countItems = () => {
  itemsCounter.innerHTML = `(${displayDiv.children.length}) Item`;
};

export default countItems;
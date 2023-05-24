const countItems = () => {
  const displayDiv = document.querySelector('.displayDiv');
  const itemsCounter = document.querySelector('.itemsCounter');
  itemsCounter.innerHTML = `(${displayDiv.children.length}) Items`;
};

export default countItems;
import countItems from './itemsCounter.js';

describe('countItems', () => {
  beforeEach(() => {
    const Div = document.createElement('div');
    Div.className = 'displayDiv';
    document.body.append(Div);

    const itemsCounter = document.createElement('p');
    itemsCounter.className = 'itemsCounter';
    document.body.append(itemsCounter);
  });
  afterEach(() => {
    const Div = document.querySelector('div');
    Div.innerHTML = '';
  });
  it('should return the correct number of items', () => {
    const Div = document.querySelector('div');
    const itemsCounter = document.querySelector('p');
    // Add 3 items to the display div
    Div.innerHTML = `
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
      `;

    // Call the `countItems` function
    countItems();

    // Assert that the `itemsCounter` element has the correct text
    expect(itemsCounter.innerHTML).toEqual('(3) Items');
  });
  it('should return the correct number of items', () => {
    const itemsCounter = document.querySelector('p');
    // Add 3 items to the display div

    // Call the `countItems` function
    countItems();

    // Assert that the `itemsCounter` element has the correct text
    expect(itemsCounter.innerHTML).toEqual('(0) Items');
  });
});
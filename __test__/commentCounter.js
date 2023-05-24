import fetchData from './__mocks__/commentCounter.js';

const commentCounter = () => {
  const jsonData = fetchData();
  return jsonData.length;
};

export default commentCounter;
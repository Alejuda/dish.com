import fetchData from './__mocks__/commentCounter.js';

const commentCounter = (id) => {
  const jsonData = fetchData(id);
  if (jsonData.status === 400) {
    return 0;
  }
  return jsonData.length;
};

export default commentCounter;
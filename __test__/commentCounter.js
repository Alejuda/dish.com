import {fetchData} from './__mocks__/commentCounter.js'

const commentCounter = (mealId) => {
    const jsonData = fetchData();
    return jsonData.length;
  };
  
  export default commentCounter;
const fetchData = (id) => {
  const response = [];
  response.status = 200;
  if (id === 0) {
    response.status = 400;
  } if (id === 3) {
    response.push({}, {}, {});
  }
  return response;
};
export default fetchData;

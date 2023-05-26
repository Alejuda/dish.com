const fetchData = (id) => {
  let response = new Array();
  response.status = 200;
  if (id === 0) {
    response.status === 400;
    return response;
  } else if (id === 3) {
    response.push({}, {}, {});
    return response;
  }
};
export default fetchData;

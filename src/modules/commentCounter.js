const commentCounter = async (mealId) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o5YLWfucVuUSY3jbCcrI/comments?item_id=${mealId}`,
  );
  if (response.status === 400) {
    return 0;
  }
  const jsonData = await response.json();
  return jsonData.length;
};

export default commentCounter;

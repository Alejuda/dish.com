const addCommit = async (mealId, user, comment) => {
  const postBody = {
    item_id: `${mealId}`,
    username: `${user}`,
    comment: `${comment}`,
  };
  const apiUrl =
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o5YLWfucVuUSY3jbCcrI/comments";
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postBody),
  });
  console.log(response);
};

export default addCommit;

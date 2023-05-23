const fetchCommmits = async (mealId) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o5YLWfucVuUSY3jbCcrI/comments?item_id=${mealId}`,
  );
  const jsonData = await response.json();
  let commits = '';
  if (response.status === 400) {
    commits = 'no comments yet.';
  } else {
    jsonData.forEach((commit) => {
      commits += `<p class="comment-description">${commit.creation_date} ${commit.username}: ${commit.comment}</p>`;
    });
  }
  return commits;
};

export default fetchCommmits;
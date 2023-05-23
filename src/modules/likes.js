const getLikes = async (dataId) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o5YLWfucVuUSY3jbCcrI/likes/', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i += 1) {
        if (data[i].item_id === dataId) {
          const elementLikes = document.getElementById(dataId);
          elementLikes.innerHTML = `${data[i].likes} likes`;
        }
      }
    });
};

const postLike = async (dataId) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o5YLWfucVuUSY3jbCcrI/likes/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ item_id: dataId }),
  })
    .then(() => { getLikes(dataId); });
};

export default postLike;
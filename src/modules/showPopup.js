import showCommits from './fetchCommits.js';
import commentCounter from './commentCounter.js';

const showPopup = async (mealId) => {
  window.popupElementd = mealId;
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`,
  );
  const jsonData = await response.json();
  const foodName = jsonData.meals[0].strMeal;
  const foodCategory = jsonData.meals[0].strCategory;
  const foodArea = jsonData.meals[0].strArea;
  const dishTags = jsonData.meals[0].strTags;
  const imgSrc = jsonData.meals[0].strMealThumb;
  const linkToRecipe = jsonData.meals[0].strSource;

  const commitContainer = document.getElementById('commits-container');
  const popUp = document.getElementById('popup-window');
  const dishImg = document.getElementById('dish-img');
  const dishTitle = document.getElementById('dish-title');
  const dishArea = document.getElementById('dish-area');
  const dishCategory = document.getElementById('dish-category');
  const dishTagsElement = document.getElementById('dish-tags');
  const recipeLink = document.getElementById('recipe-link');
  const commentsNumber = document.getElementById('comments-number');
  const numberOfComments = await commentCounter(window.popupElementd);

  commentsNumber.innerText = numberOfComments;

  let tagsHtml = '';
  if (dishTags !== null) {
    const tagsLoop = dishTags.split(',');
    tagsLoop.forEach((tag) => {
      tagsHtml += `<p class="tag-description">${tag}</p>`;
    });
  }

  commitContainer.innerHTML = await showCommits(mealId);
  dishImg.src = imgSrc;
  dishTitle.innerText = foodName;
  dishArea.innerText = `Area: ${foodArea}`;
  dishCategory.innerText = `Category: ${foodCategory}`;
  dishTagsElement.innerHTML = tagsHtml;
  recipeLink.setAttribute('href', linkToRecipe);
  popUp.style.display = 'flex';
};

export default showPopup;

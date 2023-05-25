const result = document.getElementById('result');
const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const search = () => {
  let userInp = document.getElementById('user-inp').value;
  if (userInp.length === 0) {
    result.innerHTML = '<h3 class="item-not-found">Input Field Cannot Be Empty</h3>';
  } else {
    fetch(url + userInp)
      .then((response) => response.json())
      .then((data) => {
        userInp = document.getElementById('user-inp').value = '';
        const myMeal = data.meals[0];

        let count = 1;
        const ingredients = [];
        for (const i in myMeal) {
          let ingredient = '';
          let measure = '';
          if (i.startsWith('strIngredient') && myMeal[i]) {
            ingredient = myMeal[i];
            measure = myMeal[`strMeasure${count}`];
            count += 1;
            ingredients.push(`${measure} ${ingredient}`);
          }
        }

        result.innerHTML = `
      <img class="search-img" src=${myMeal.strMealThumb}>
      <div class="details">
          <h2>${myMeal.strMeal}</h2>
          <h4>${myMeal.strArea}</h4>
      </div>
      <div id="ingredient-con"></div>
      <div id="recipe">
          <button id="hide-recipe">X</button>
          <pre id="instructions">${myMeal.strInstructions}</pre>
      </div>
      <button id="show-recipe">View Recipe</button>
      `;
        const ingredientCon = document.getElementById('ingredient-con');
        const parent = document.createElement('ul');
        const recipe = document.getElementById('recipe');
        const hideRecipe = document.getElementById('hide-recipe');
        const showRecipe = document.getElementById('show-recipe');

        ingredients.forEach((i) => {
          const child = document.createElement('li');
          child.innerText = i;
          parent.appendChild(child);
          ingredientCon.appendChild(parent);
        });

        hideRecipe.addEventListener('click', () => {
          recipe.style.display = 'none';
          showRecipe.style.display = 'block';
        });
        showRecipe.addEventListener('click', () => {
          recipe.style.display = 'block';
          showRecipe.style.display = 'none';
        });
      })
      .catch(() => {
        result.innerHTML = '<h3 class="item-not-found">Invalid Input</h3>';
      });
  }
};

export default search;

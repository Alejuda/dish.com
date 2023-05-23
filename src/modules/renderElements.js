const catogray = document.getElementById('catogary');
const typeOrArea = document.getElementById('typeOrArea');
const displayDiv = document.querySelector('.displayDiv');


export const selectedDrop = async (selected) => {
  await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?${selected}=list`)
    .then((response) => response.json())
    .then((data) => {
      const  meals  = data.meals;

      meals.forEach((element) => {
        if (typeOrArea.children.length < 28) {
          const choice = document.createElement('option');
          if ((+Object.values(element)[0]) % 1 === 0) {
            choice.append(document.createTextNode(Object.values(element)[1]));
            choice.value = Object.values(element)[1];
          } else {
            choice.append(document.createTextNode(Object.values(element)[0]));
            choice.value = Object.values(element)[0];
          }

          typeOrArea.append(choice);
        }
      });
    });
};

export const getMyData = async () => {
  await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${catogray.value}=${typeOrArea.value}`)
    .then((response) => response.json())
    .then((data) => {
      const { meals } = data;

      displayDiv.innerHTML = '';
      meals.forEach((meal) => {
        
        const container = document.createElement('div');
        container.className = 'container';
        const maelDiv = document.createElement('div');
        maelDiv.className = 'meal';
        maelDiv.setAttribute('data-id', meal.idMeal);
        maelDiv.innerHTML = `<img src="${meal.strMealThumb}" alt="Meal Photo" class = "mealPhoto">`;
        const comments = document.createElement('button');
        comments.className = 'commentsButton';
        
        const mealName = document.createElement('p');
        mealName.className = 'mealName';
        mealName.append(document.createTextNode(meal.strMeal));
        container.append(maelDiv);
        container.innerHTML += `<button type = "button" data-id = ${meal.idMeal} onclick = "showPopup(${meal.idMeal})" class="comment">comment</button>`;

        container.append(mealName);
        displayDiv.append(container);
      });
    });
};

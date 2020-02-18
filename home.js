let randomNumber;

generateRandomNumber = length => {
  return Math.floor(Math.random() * length);
};

insertRandomRecipe = () => {
  randomNumber = generateRandomNumber(recipes.length);

  let h1 = document.getElementById("recipe-name");
  h1.innerText = recipes[randomNumber].name;

  let img = document.getElementById("recipe");
  img.setAttribute("src", `images/${recipes[randomNumber].img}`);
  img.setAttribute("alt", `${recipes[randomNumber].name}`);

  let synopsis = document.getElementById("recipe-synopsis");
  synopsis.innerText = recipes[randomNumber].synopsis;
};

redirectToRecipesPage = () => {
  const btn = document.getElementById("goToRecipe");

  btn.addEventListener("click", () => {
    window.location.href = `recipes.html#rcp${randomNumber + 1}`;
  });
};

insertRandomRecipe();
redirectToRecipesPage();

createInsertRecipeList = () => {
  // display names of all recipes
  for (let i = 0; i < recipes.length; i++) {
    // create and insert <a> tag
    let a = document.createElement("a");
    let href = document.createAttribute("href");
    href.value = "#rcp" + (i + 1);
    a.setAttributeNode(href);

    // add URL
    let link = document.createTextNode(recipes[i].name);
    a.appendChild(link);

    // create h2 element and append <a> tag to it
    let h2 = document.createElement("h2");
    h2.appendChild(a);

    // create div and append h2 element to it
    const div = document.getElementById("recipe-list");
    div.appendChild(h2);
  }
};

createInsertRecipes = () => {
  // display each recipe with info and image
  for (let i = 0; i < recipes.length; i++) {
    // create div for dividing recipes
    let div = document.createElement("div");
    let id = document.createAttribute("id");
    id.value = "rcp" + (i + 1);
    div.setAttributeNode(id);

    // create div with class "recipe"
    let div2 = document.createElement("div");
    div2.setAttribute("class", "recipe");

    // create div with class "recipe-content"
    let div3 = document.createElement("div");
    div3.setAttribute("class", "recipe-content");

    // create h1 element for recipe name
    let h1 = document.createElement("h1");
    h1.innerText = recipes[i].name;
    div3.appendChild(h1);

    // create recipe image
    let img = document.createElement("IMG");
    img.setAttribute("src", `images/${recipes[i].img}`);
    img.setAttribute("alt", `${recipes[i].name}`);
    div3.appendChild(img);

    // create paragraphs for recipe info
    let p = document.createElement("p");
    p.innerText = `Yield: ${recipes[i].yield} servings`;
    div3.appendChild(p);
    let p2 = document.createElement("p");
    p2.innerText = `Cook Time: ${recipes[i].cookTime} minutes`;
    div3.appendChild(p2);

    // create buttons and text field for timer
    let btn = document.createElement("btn");
    btn.innerText = "Start";
    btn.setAttribute("id", `start${i}`);
    btn.setAttribute("class", "start");
    div3.appendChild(btn);
    let btn2 = document.createElement("btn");
    btn2.innerText = "Pause";
    btn2.setAttribute("id", `pause${i}`);
    btn2.setAttribute("class", "pause");
    div3.appendChild(btn2);
    let btn3 = document.createElement("btn");
    btn3.innerText = "Continue";
    btn3.setAttribute("id", `continue${i}`);
    btn3.setAttribute("class", "continue");
    div3.appendChild(btn3);
    let timeInfo = document.createElement("div");
    timeInfo.setAttribute("id", `timeInfo${i}`);
    timeInfo.setAttribute("class", "timeInfo");
    div3.appendChild(timeInfo);

    // create header for recipe ingredients
    let div4 = document.createElement("div");
    div3.appendChild(div4);
    let h3 = document.createElement("h3");
    h3.innerText = "Ingredients";
    div4.appendChild(h3);

    // create order list for recipe ingredients
    let ol = document.createElement("ol");
    div4.appendChild(ol);
    for (let j = 0; j < recipes[i].ingredients.length; j++) {
      let li = document.createElement("li");
      li.innerText = recipes[i].ingredients[j];
      ol.appendChild(li);
    }

    // create header for recipe instructions
    let div5 = document.createElement("div");
    div3.appendChild(div5);
    let newh3 = document.createElement("h3");
    newh3.innerText = "Instructions";
    div5.appendChild(newh3);

    // create order list for recipe instructions
    let ol2 = document.createElement("ol");
    div5.appendChild(ol2);
    for (let k = 0; k < recipes[i].instructions.length; k++) {
      let li = document.createElement("li");
      li.innerText = recipes[i].instructions[k];
      ol2.appendChild(li);
    }

    // append div "recipe-content" to div "recipe"
    div2.appendChild(div3);

    // append dividing div and div "recipe" to div "recipes"
    const div6 = document.getElementById("recipes");
    div6.appendChild(div);
    div6.appendChild(div2);
  }
};

createInsertRecipeList();
createInsertRecipes();

// Logic for timer
let cookingTime;
let seconds = 0;
let minutes = 0;
let interval;
let pauseBtn;
let isPause = false;
let isStart = true;
let id;
let prevId;

counter = () => {
  minutes = cookingTime;
  if (seconds == -1) {
    seconds = 59;
    cookingTime--;
  }

  if (seconds >= 0 && seconds <= 9) {
    seconds = `0${seconds}`;
  }

  if (cookingTime >= 0 && cookingTime <= 9) {
    minutes = `0${cookingTime}`;
  }

  if (cookingTime == 0 && seconds == 0) {
    clearInterval(interval);
  }

  document.getElementById(`timeInfo${id}`).innerHTML =
    minutes + "min : " + seconds + "sec";
  seconds--;
};

pauseCounter = () => {
  // user can not press pause and continue before start
  if (!isStart) {
    clearInterval(interval);
    isPause = true;
  }
};

startCounter = () => {
  clearInterval(interval);
  isStart = true;
  setTimeout(() => {
    document.getElementById(`timeInfo${id}`).style.display = "block";
    cookingTime = recipes[id].cookTime;
    seconds = 0;
  }, 1);

  if (isStart) {
    interval = setInterval(counter, 1000);
    isStart = false;

    return interval;
  }
};

continueCounter = () => {
  if (isPause) {
    clearInterval(interval);
    interval = setInterval(counter, 1000);
    isPause = false;
    return interval;
  }
};

const recipesDiv = document.getElementById("recipes");

recipesDiv.addEventListener("click", event => {
  if (event.target.innerHTML === "Start") {
    if (!isStart) {
      prevId = id;
      document.getElementById(`timeInfo${prevId}`).style.display = "none";
    }
    startCounter();
  }

  if (event.target.innerHTML === "Pause") {
    pauseCounter();
  }

  if (event.target.innerHTML === "Continue") {
    continueCounter();
  }

  id = event.target.id.slice(-1);
});

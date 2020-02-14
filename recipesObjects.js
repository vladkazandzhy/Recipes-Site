class Recipe {
  constructor(
    name,
    img,
    recipeYield,
    cookTime,
    ingredients,
    instructions,
    synopsis
  ) {
    this.name = name;
    this.img = img;
    this.yield = recipeYield;
    this.cookTime = cookTime;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.synopsis = synopsis;
  }
}

const recipe1 = new Recipe(
  "Barbeque Chicken",
  "barbeque-chicken.jpg",
  4,
  45,
  [
    "cup of sugar",
    "1 tsp of vinegar",
    "2 tbsp of ketchup",
    "2 chicken breasts"
  ],
  [
    "mix the sauce ingredients in a large bowl",
    "add chicken and store in the fridge for at least 1 hour",
    "pour 1 tbsp of olive oil in a pan",
    "add chicken and stir-fry until golden brown"
  ],
  "A great summer recipe!"
);

const recipe2 = new Recipe(
  "Mashed potatoes",
  "creamy-mashed-potatoes.jpg",
  4,
  30,
  [
    "2 pounds potatoes",
    "1 teaspoon salt",
    "1/2 cup hot milk",
    "1/3 cup unsalted butter",
    "6 cloves fresh garlic",
    "1/4 cup sour cream",
    "salt and pepper, to taste",
    "1 tbsp fresh parsley"
  ],
  [
    "Peel and cut potatoes",
    "Place potatoes in a large pot " + "and cover with cold, salted water",
    "Boil on medium for about 20minutes",
    "heat 1 tablespoon of the butter",
    "Sauté garlic until fragrant, about 1 minute",
    "Drain cooked potatoes",
    "add in the remaining butter, cooked garlic, " + "hot milk and sour cream",
    "Mash the potatoes with a potato masher until smooth",
    "Add in the parmesan cheese",
    "Season with salt and pepper to taste"
  ],
  "Easy Creamy Mashed Potatoes"
);

const recipe3 = new Recipe(
  "Basic Smoothie",
  "smoothy.jpg",
  2,
  10,
  [
    "2 cups frozen fruit (any kind)",
    "1 cup liquid (almond milk, orange juice, water, etc.)",
    "handful of greens (spinach, kale, etc.)",
    "1/2 cup nonfat Greek yogurt"
  ],
  [
    "Place all ingredients into a high-speed blender",
    "Blend on high until smooth",
    "Serve immediately and top with your favorite toppings"
  ],
  "Healthy Smoothie for Breakfast"
);

const recipe4 = new Recipe(
  "Deruny",
  "deruny.jpg",
  4,
  30,
  [
    "Large yukon potatoes",
    "Small yellow onion",
    "Large egg",
    "All-purpose flour",
    "Fine salt",
    "Baking soda",
    "Grapeseed oil for frying",
    "Sour cream to serve"
  ],
  [
    "Grate potatoes and onion",
    "Stir in egg and dry ingredients (flour, " + "salt and baking soda)",
    "Heat a lightly oiled skillet over medium heat",
    "Spoon pancake batter into skillet",
    "Fry each side for few minutes until golden brown",
    "Serve with sour cream"
  ],
  "Ukrainian Potato Pancakes"
);

const recipe5 = new Recipe(
  "Meatballs",
  "meatballs.jpg",
  12,
  30,
  [
    "1 lb ground beef",
    "1 lb ground pork",
    "1/2 cup Italian breadcrumbs",
    "1/3 cup milk",
    "1/4 cup onion, diced",
    "1/2 teaspoon garlic powder",
    "1 teaspoon Italian seasoning",
    "1 egg",
    "1/4 cup parsley chopped",
    "1/4 cup shredded parmesan",
    "salt and pepper to taste"
  ],
  [
    "Preheat oven to 400 degrees F. ",
    "In a medium bowl, mix all ingredients until " + "just combined.",
    "Shape mixture into 48 meatballs, " +
      "approximately 1 1/2 tablespoons each. ",
    "Bake 18-20 minutes or until cooked through. "
  ],
  "Excellent Meatballs Recipe!"
);

const recipes = [recipe1, recipe2, recipe3, recipe4, recipe5];

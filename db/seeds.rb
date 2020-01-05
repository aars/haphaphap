# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Create a Dish with it's default Recipe, containing one other Recipe as step, with
# Ingredients and their quantities/units set up.

# Bottom up
# Create Ingredients
bloem = Ingredient.create(name: "Bloem")
boter = Ingredient.create(name: "Boter")
melk = Ingredient.create(name: "Melk")
peper = Ingredient.create(name: "Zwarte peper")
zout = Ingredient.create(name: "Zout")
nootmuskaat = Ingredient.create(name: "Nootmuskaat")

# Create (sub)Recipe and link ingredients.
bcms = Recipe.create(name: "Bechamelsaus", description: "Witte saus")
RecipeIngredient.create(recipe_id: bcms.id, ingredient_id: bloem.id, unit: "g", quantity: 50)
RecipeIngredient.create(recipe_id: bcms.id, ingredient_id: boter.id, unit: "g", quantity: 50)
RecipeIngredient.create(recipe_id: bcms.id, ingredient_id: melk.id, unit: "ml", quantity: 500)
RecipeIngredient.create(recipe_id: bcms.id, ingredient_id: peper.id, unit: "snufje", quantity: 1)
RecipeIngredient.create(recipe_id: bcms.id, ingredient_id: zout.id, unit: "snufje", quantity: 1)
RecipeIngredient.create(recipe_id: bcms.id, ingredient_id: nootmuskaat.id, unit: "snufje", quantity: 1)

# Create RecipeSteps and link Ingredients.
bcms_step_1 = RecipeStep.create(title: "smelt de boter", instruction: "doe de boter in een pannetje en smelt deze. Roer de bloem er door en bak de roux een paar minuten tot deze gaar begint te worden en het structuur krijgt van zand.", duration: 5, recipe_id: bcms.id)
RecipeStepIngredient.create(recipe_step_id: bcms_step_1.id, ingredient_id: boter.id)
RecipeStepIngredient.create(recipe_step_id: bcms_step_1.id, ingredient_id: bloem.id)
bcms_step_2 = RecipeStep.create(title: "voeg de melk toe", instruction: "Giet dan beetje bij beetje de melk er bij en blijf roeren met een garde. Laat de saus iets indikken. Is de saus nog iets dun laat hem dan iets langer op het vuur staan. Is hij juist te dik, voeg dan een beetje melk toe.", duration: 8, recipe_id: bcms.id)
RecipeStepIngredient.create(recipe_step_id: bcms_step_2.id, ingredient_id: melk.id)
bcms_step_3 = RecipeStep.create(title: "breng op smaak", instruction: "Breng de bechamelsaus op smaak met een snufje peper en zout.", duration: 1, recipe_id: bcms.id)
RecipeStepIngredient.create(recipe_step_id: bcms_step_3.id, ingredient_id: zout.id)
RecipeStepIngredient.create(recipe_step_id: bcms_step_3.id, ingredient_id: peper.id)
RecipeStepIngredient.create(recipe_step_id: bcms_step_3.id, ingredient_id: nootmuskaat.id)

# Create Dish with it's default Recipe, with above Recipe as step.
cb = Dish.create(name: "Courgetteburger", description: "Zompige burger.")
cb_r = Recipe.create(name: "Courgetteburger", description: "standaard recept", dish_id: cb.id)

ei = Ingredient.create(name: "Ei")
courgette = Ingredient.create(name: "courgette")
paneermeel = Ingredient.create(name: "paneermeel")
RecipeIngredient.create(recipe_id: cb_r, ingredient_id: ei.id, unit: "pcs", quantity: 1)
RecipeIngredient.create(recipe_id: cb_r, ingredient_id: courgette.id, unit: "pcs", quantity: 1)
RecipeIngredient.create(recipe_id: cb_r, ingredient_id: paneermeel.id, unit: "cup", quantity: 1)

# Create first 'actual' step.
cb_step_1 = RecipeStep.create(title: "rasp en droog de courgette", instruction: "Rasp de courgettes met een grove rasp. Leg de geraspte courgette in een vergiet en strooi er flink wat zout over. Hierdoor onttrek je het overtollige vocht en krijg je straks mooie burgers. Laat de courgette tien minuutjes uitlekken en knijp daarna het vocht er met de hand uit. En dan bedoel ik echt stevig knijpen zodat je zoveel mogelijk vocht eruit haalt.", duration: 5, recipe_id: cb.id)
RecipeStepIngredient.create(recipe_step_id: cb_step_1.id, ingredient_id: ei.id)

# Link bcms recipe as step 2
RecipeStep.create(recipe_id: cb.id, is_recipe_id: bcms.id)

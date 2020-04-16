exports.seed = function (knex) {
  return knex("ingredient").insert([
    { name: "IngredientName1" },
    { name: "IngredientName2" },
    { name: "IngredientName3" },
  ]);
};

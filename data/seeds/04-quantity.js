exports.seed = function (knex) {
  return knex("quantity").insert([
    { recipe_id: 1, ingredient_id: 1, unit: "test unit", quantity: 12.34 },
    { recipe_id: 1, ingredient_id: 2, unit: "test unit", quantity: 12.34 },
    { recipe_id: 1, ingredient_id: 3, unit: "test unit", quantity: 12.34 },
    { recipe_id: 2, ingredient_id: 1, unit: "test unit", quantity: 12.34 },
    { recipe_id: 2, ingredient_id: 2, unit: "test unit", quantity: 12.34 },
    { recipe_id: 2, ingredient_id: 3, unit: "test unit", quantity: 12.34 },
    { recipe_id: 3, ingredient_id: 1, unit: "test unit", quantity: 12.34 },
    { recipe_id: 3, ingredient_id: 2, unit: "test unit", quantity: 12.34 },
    { recipe_id: 3, ingredient_id: 3, unit: "test unit", quantity: 12.34 },
  ]);
};

exports.seed = function (knex) {
  return knex("recipe").insert([
    { name: "RecipeName1" },
    { name: "RecipeName2" },
    { name: "RecipeName3" },
  ]);
};

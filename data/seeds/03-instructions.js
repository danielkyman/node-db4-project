exports.seed = function (knex) {
  return knex("instruction").insert([
    {
      recipe_id: 1,
      instruction_number: 1,
      instruction: "this is a test instruction 1 for recipe 1",
    },
    {
      recipe_id: 1,
      instruction_number: 2,
      instruction: "this is a test instruction 2 for recipe 1",
    },
    {
      recipe_id: 1,
      instruction_number: 3,
      instruction: "this is a test instruction 3 for recipe 1",
    },
    {
      recipe_id: 2,
      instruction_number: 1,
      instruction: "this is a test instruction 1 for recipe 2",
    },
    {
      recipe_id: 2,
      instruction_number: 2,
      instruction: "this is a test instruction 2 for recipe 2",
    },
    {
      recipe_id: 2,
      instruction_number: 3,
      instruction: "this is a test instruction 3 for recipe 2",
    },
    {
      recipe_id: 3,
      instruction_number: 1,
      instruction: "this is a test instruction 1 for recipe 3",
    },
    {
      recipe_id: 3,
      instruction_number: 2,
      instruction: "this is a test instruction 2 for recipe 3",
    },
    {
      recipe_id: 3,
      instruction_number: 3,
      instruction: "this is a test instruction 3 for recipe 3",
    },
  ]);
};

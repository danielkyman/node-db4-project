exports.up = function (knex) {
  return knex.schema
    .createTable("recipe", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 255).unique().notNullable();
    })
    .createTable("instruction", (tbl) => {
      tbl.increments("id");
      tbl.integer("instruction_number").unsigned().notNullable();
      tbl.text("instruction");
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipe")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })
    .createTable("ingredient", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 255).unique().notNullable();
    })
    .createTable("quantity", (tbl) => {
      tbl.increments("id");
      tbl.string("unit", 255).notNullable();
      tbl.float("quantity").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipe")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredient")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("quantity")
    .dropTableIfExists("ingredient")
    .dropTableIfExists("instruction")
    .dropTableIfExists("recipe");
};

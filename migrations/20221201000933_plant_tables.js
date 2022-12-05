/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('plant_details', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('care_instructions').notNullable();
      table.string('info').notNullable();
      table.string('category').notNullable();
      table.boolean('needs_trellis').notNullable();
      table.string('image').notNullable;
      table.timestamp('created_on').defaultTo(knex.fn.now())
      table.timestamp('updated_on').defaultTo(knex.fn.now());
    })
    .createTable('perrennial_zones', (table) => {
      table.increments('id').primary();
      table.integer('plant_id').unsigned().notNullable();
      table.foreign('plant_id')
           .references('plant_details.id')
           .onUpdate('CASCADE')
           .onDelete('CASCADE');
      table.integer('zone_0a');
      table.integer('zone_0b');
      table.integer('zone_1a');
      table.integer('zone_1b');
      table.integer('zone_2a');
      table.integer('zone_2b');
      table.integer('zone_3a');
      table.integer('zone_3b');
      table.integer('zone_4a');
      table.integer('zone_4b');
      table.integer('zone_5a');
      table.integer('zone_5b');
      table.integer('zone_6a');
      table.integer('zone_6b');
      table.integer('zone_7a');
      table.integer('zone_7b');
      table.integer('zone_8a');
    })
    .createTable('sun_exposure', (table) => {
      table.increments('id').primary();
      table.integer('plant_id').unsigned().notNullable();
      table.foreign('plant_id')
           .references('plant_details.id')
           .onUpdate('CASCADE')
           .onDelete('CASCADE');
      table.integer('no_direct_sun');
      table.integer('under_2_hours');
      table.integer('2_to_4_hours');
      table.integer('4_to_6_hours');
      table.integer('6_to_8_hours');
      table.integer('8_plus_hours');
    })
    .createTable('user_plant_list', (table) => {
      table.increments('id').primary().notNullable();
      table.integer('plant_id').unsigned().notNullable();
      table.foreign('plant_id')
           .references('plant_details.id')
           .onUpdate('CASCADE')
           .onDelete('CASCADE');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('plant_details').dropTable('perrennial_zones').dropTable('sun_exposure').dropTable('user_plant_list');  
};

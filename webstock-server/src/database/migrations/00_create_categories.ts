import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('categories', table => {
        table.increments('id').primary();
        table.string('name').notNullable().unique();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('categories');
}
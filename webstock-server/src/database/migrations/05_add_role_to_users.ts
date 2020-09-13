import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.alterTable('users', table => {
        table.string('role').defaultTo('USER').notNullable()
    });
}

export async function down(knex: Knex) {
    return knex.schema.alterTable('users', table => {
        table.dropColumn('role')
    })
}
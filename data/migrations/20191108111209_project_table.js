
exports.up = function(knex) {
    return knex.schema.createTable('project', tbl => {
        tbl.increments('project_id');
        tbl.string('project_name', 128).notNullable();
        tbl.string('project_description',255);
        tbl.boolean('project_completed').notNullable().defaultTo(false);
    })
    .createTable('tasks', tbl => {
        tbl.increments('task_id');
        tbl.string('task_description',255).notNullable();
        tbl.string('notes',128);
        tbl.boolean('task_completed').notNullable().defaultTo(false);
        tbl.integer('project_id').notNullable().unsigned()
        .references('id')
        .inTable('project')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
    .createTable('resources', tbl => {
        tbl.increments('resource_id');
        tbl.string('resource_name', 128).notNullable().unique();
        tbl.string('resource_description',255).notNullable();
    })
    .createTable('project-resources', tbl => {
        tbl.increments('project_resource_id');
        tbl.integer('project_id').unsigned()
        .references('id')
        .inTable('project')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
        tbl.integer('resource_id').unsigned()
        .references('id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project-resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('project')
};

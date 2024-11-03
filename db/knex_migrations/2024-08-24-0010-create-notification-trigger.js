exports.up = function (knex) {
    return knex.schema.createTable("notification_trigger", function (table) {
        table.increments("id");
        table.integer("monitor_id").unsigned().notNullable()
            .references("id").inTable("monitor")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        table.timestamp("timestamp").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("notification_trigger");
};

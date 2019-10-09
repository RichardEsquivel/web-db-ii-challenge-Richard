
//notNullable will require that value to be submitted, only value that will be an integer will be mileage it will always be a whole number
exports.up = function (knex) {
	return knex.schema.createTable('vehs', tbl => {
		tbl.increments();
		tbl.string('model').notNullable();
		tbl.string('make').notNullable();
		//vins are unique to each vehicle and will be provided as the basis of each car's record
		tbl.string('vin').notNullable().unique();
		tbl.integer('mileage').notNullable();
		tbl.string('transmission')
		tbl.string('title')
	})


};
//dropTableIfExists will check if table is there and undo changes from this migration
exports.down = function (knex) {
	return knex.dropTableIfExists('vehs')
};

exports.up = function (knex) {
	return knex.schema.createTable("veh_title_status", tbl => {
		tbl.increments();
		tbl.string('username');
		tbl.string('password');

	}).createTable('comments', tbl => {
		tbl.increments();
		tbl.string('comments')

	}).createTable('pictures', tbl => {
		tbl.increments();
		tbl.string('image_src');
	})
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('pictures').dropTableIfExists('comments').dropTableIfExists('comments')

};

//import veh-db using require
const db = require('../data/veh-db.js');

//these funtions will be exported 
module.exports = {
	get,
	getById,
	insert
}
//this will return * select of the table of 'vehs'
function get() {
	return db('vehs');
}
//this will allow us to return the first veh matching a requested unique incremented id of that veh
function getById(id) {
	return db('vehs').where({ id }).first();
}

//This will allow us to add a veh to the table and will then return that newly added veh by it's destructured id
function insert(veh) {
	return db('vehs')
		.insert(veh)
		.then(([id]) => getById(id));
}
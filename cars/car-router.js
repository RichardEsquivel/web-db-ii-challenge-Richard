const express = require('express');

const knex = require('knex');
const Vehs = require('./car-model.js');
const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

const router = express.Router();

router.get('/', (req, res) => {
	Vehs.get()
		.then(vehs => {
			res.status(200).json(vehs);
		})
		.catch(error => {
			res.status(500).json({ Error: 'Failed to retrieve vehicles.' });
		});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	Vehs.getById(id)
		.then(veh => {
			if (veh) {
				res.status(200).json(veh);
			} else {
				res.status(404).json({ Message: 'This vehicle ID was not located please confirm this is the correct id.' })
			}
		})
		.catch(error => {
			console.log('POST error', error);
			res.status(500).json({ message: 'Failed to store data, please try again later.' });
		});
});



router.post('/', (req, res) => {
	const vehData = req.body;
	Vehs.insert()
		.insert(vehData)
		.then(ids => {
			db('fruits')
				.where({ id: ids[0] })
				.then(newVehData => {
					res.status(201).json(newVehData);
				});
		})
		.catch(error => {
			console.log('Update error', error);
			res.status(500).json({ Error: 'Failed to store vehicle data.' });
		});
})
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
	const { model, make, vin, mileage, transmission, title } = req.body;
	Vehs.insert({ model, make, vin, mileage, transmission, title })
		.then(veh => {
			if (veh) {
				res.status(200).json(veh);
			} else {
				res.status(404).json({ Error: 'Failed to store vehicle data.' })
			}
		})
		.catch(error => {
			console.log(error);
			res.status(500).json({ Error: 'Failed to store vehicle data.' })
		})
})

module.exports = router;
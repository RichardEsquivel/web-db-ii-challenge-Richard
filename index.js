//creating router
const express = require('express')
const vehsRouter = require('./cars/car-router')
//create server
const server = express();

//create middleware express.json to parse json body
server.use(express.json());

server.use('/vehs', vehsRouter);

//declare value of port
const port = 4000;
server.listen(port, () => console.log("Server running on 4000"));

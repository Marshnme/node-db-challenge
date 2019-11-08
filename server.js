const express = require('express');
const server = express();
const helmet = require('helmet');
const projectRouter = require('./projectRoutes/projectRouter');
server.use(express.json());
server.use(helmet());
server.use('/project', projectRouter);



module.exports = server;
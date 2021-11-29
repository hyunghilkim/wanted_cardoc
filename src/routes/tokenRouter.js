const express = require('express');
const routes = require('../globals/routes');

const userController = require('../controllers/userController.js');

const tokenRouter = express.Router();

//로그인
tokenRouter.post(routes.root, userController.postToken);

module.exports = tokenRouter;

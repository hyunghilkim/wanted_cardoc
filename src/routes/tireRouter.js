const express = require('express');
const routes = require('../globals/routes');

const tireController = require('../controllers/tireController');

const tireRouter = express.Router();

const { checkToken } = require('../middlewares/auth');

//타이어 정보생성
tireRouter.post(routes.root, checkToken, tireController.postTire);
//고객별 소유 자동차 타이어 정보조회
tireRouter.get(routes.root, checkToken, tireController.getTire);

module.exports = tireRouter;

const { statusCode, responseMessage } = require('../globals');
const { resFormatter } = require('../utils');
const tireService = require('../services/tireService');
const openTireAPI = require('../jobs/openTireAPI');
const { ValidationError } = require('../utils/errors/commonError');

//타이어 정보생성
exports.postTire = async (req, res, next) => {
  try {
    const usersTireInfos = req.body;
    const writer = req.decoded.userId;

    //입력값 배열 여부 확인
    if (!Array.isArray(usersTireInfos)) {
      throw new ValidationError();
    }

    //입력값 배열 5이하 여부 확인
    if (usersTireInfos.length > 5) {
      throw new ValidationError();
    }

    //입력값 확인
    usersTireInfos.map(usersTireInfo => {
      let { userName, trimId } = usersTireInfo;
      if (userName === undefined || trimId === undefined) {
        throw new ValidationError();
      }
    });

    //타이어정보에 사용자정보 추가
    usersTireInfos.map(usersTireInfo => {
      usersTireInfo['writer'] = writer;
    });

    const detailTireInfos = await openTireAPI.getDetailTireInfo(usersTireInfos);

    const resDatas = [];

    for await (let detailTireInfo of detailTireInfos) {
      try {
        let resData = await tireService.postTire(detailTireInfo);
        resDatas.push(resData);
      } catch (err) {
        console.log(err);
      }
    }

    return res
      .status(statusCode.OK)
      .send(resFormatter.success(responseMessage.SUCCESS, resDatas));
  } catch (err) {
    next(err);
  }
};

//사용자 타이어 정보 조회
exports.getTire = async (req, res, next) => {
  try {
    const userName = req.decoded.userId;

    const resDatas = await tireService.getTire(userName);

    return res
      .status(statusCode.OK)
      .send(resFormatter.success(responseMessage.SUCCESS, resDatas));
  } catch (err) {
    next(err);
  }
};

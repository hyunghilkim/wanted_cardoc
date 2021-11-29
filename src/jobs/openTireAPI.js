const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

//api호출하여 타이어 세부정보 얻기
const getDetailTireInfoThroughApi = async usersTireInfos => {
  for await (let usersTireInfo of usersTireInfos) {
    try {
      const res = await axios.get(
        `https://dev.mycar.cardoc.co.kr/v1/trim/${usersTireInfo.trimId}`,
      );

      const frontTire = res.data.spec.driving.frontTire.value;
      const rearTire = res.data.spec.driving.rearTire.value;

      usersTireInfo['frontTire'] = frontTire;
      usersTireInfo['rearTire'] = rearTire;
    } catch (err) {
      next(err);
    }
  }
  return usersTireInfos;
};

//타이어 세부정보 얻기 , main함수
exports.getDetailTireInfo = async usersTireInfos => {
  try {
    const detailTireInfos = await getDetailTireInfoThroughApi(usersTireInfos);

    return detailTireInfos;
  } catch (err) {
    next(err);
  }
};

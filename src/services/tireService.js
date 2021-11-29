const models = require('../models');

const doRegex = (userName, frontTire, rearTire, writer) => {
  const regexCheck = new RegExp(
    /(?<width>[0-9]+)+\/(?<aspect>[0-9]+)+(?<type>\w)(?<wheel>[0-9]+)+/,
  );

  const separatedFrontTire = regexCheck.exec(frontTire);
  const separatedRearTire = regexCheck.exec(rearTire);

  const separatedTire = {
    name: userName,
    front_width: separatedFrontTire.groups.width,
    front_aspect: separatedFrontTire.groups.aspect,
    front_type: separatedFrontTire.groups.type,
    front_wheel: separatedFrontTire.groups.wheel,
    rear_width: separatedRearTire.groups.width,
    rear_aspect: separatedRearTire.groups.aspect,
    rear_type: separatedRearTire.groups.type,
    rear_wheel: separatedRearTire.groups.wheel,
    writer: writer,
  };

  return separatedTire;
};

/**
 * 타이어 정보 저장
 * @param detailTireInfo
 * @returns {Object} 타이어 저장 정보
 */
exports.postTire = async detailTireInfo => {
  try {
    const { userName, frontTire, rearTire, writer } = detailTireInfo;

    const separationTireInfo = doRegex(userName, frontTire, rearTire, writer);
    const newTire = await models.tire.create(separationTireInfo);

    return newTire;
  } catch (err) {
    throw err;
  }
};

/**
 * 고객별 타이어 정보 조회
 * @param useName
 * @returns [{Object}, {Object}, ...] 타이어 정보 조회결과
 */
exports.getTire = async userName => {
  try {
    console.log(userName);
    const tireList = await models.tire.findAll({ where: { writer: userName } });
    //console.log(tireList);

    return tireList;
  } catch (err) {
    throw err;
  }
};

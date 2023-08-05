const Dogs = require("../models/dogs.model");

/*
CRUD ##############
*/

const returnData = {
  resData: [],
  res_message: null,
  resAt: new Date().getTime(),
};

exports.create = (req, res) => {
  if (!req.body) {
    returnData.resData = [];
    returnData.res_message = "데이터가 없습니다";
    res.status(400).send(returnData);
  }

  const dogs = new Dogs({
    dog_name: req.body.dog_name,
    breed: req.body.breed,
    admission_date: req.body.admission_date,
    drink_date: req.body.drink_date,
    water: req.body.water,
  });

  //데이터베이스 저장
  Dogs.create(dogs, (err, data) => {
    returnData.resData = [];
    if (err) {
      returnData.res_message = err.message || "insert 오류가 발생했습니다";
      res.status(500).send(returnData);
    } else {
      returnData.resData = data;
      returnData.res_message = "insert ok!!!";
      res.status(200).send(returnData);
    }
  });
};

//전체조회
exports.findAll = (req, res) => {
  Dogs.getAll((err, data) => {
    returnData.resData = [];
    if (err) {
      returnData.res_message =
        err.message || "검색하는 동안 일부 오류가 발생했습니다";
      res.status(500).send(returnData);
    } else {
      returnData.resData = data;
      returnData.res_message = "select ok!!!";
      res.status(200).send(returnData);
    }
  });
};

exports.findId = (req, res) => {
  Dogs.findById(req.params.dogsId, (err, data) => {
    returnData.resData = [];
    if (err) {
      if (err.kind === "not_found") {
        returnData.res_message =
          err.message ||
          `다음 id의 정보를 찾을 수 없습니다 id: ${req.params.dogsId}.`;
        res.status(404).send(returnData);
      } else {
        returnData.res_message =
          err.message ||
          `검색하는 도중 오류가 발행되었습니다 id ${req.params.dogsId}.`;
        res.status(500).send(returnData);
      }
    } else {
      returnData.resData = data;
      returnData.res_message = "select dog ok!!!";
      res.status(200).send(returnData);
    }
  });
};

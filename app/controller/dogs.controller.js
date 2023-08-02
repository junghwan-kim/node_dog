const dogs = require("../models/dogs.model");

/*
CRUD ##############
*/

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty",
    });
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
    if (err) {
      res.status(500).send({
        message: err.message || "insert 오류가 발생했습니다",
      });
    }
  });
};

//전체조회
exports.findAll = (req, res) => {
  Dogs.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "검색하는 동안 일부 오류가 발생했습니다",
      });
    } else {
      res.send(data);
    }
  });
};

exports.findId = (req, res) => {
  Dogs.findById(req.params.dogsId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `다음 id의 정보를 찾을 수 없습니다 id: ${req.params.dogsId}.`,
        });
      } else {
        res.status(500).send({
          message: `검색하는 도중 오류가 발행되었습니다 id ${req.params.dogsId}.`,
        });
      }
    } else {
      res.send(data);
    }
  });
};

module.exports = (app) => {
  const dogs = require("../controller/dogs.controller");

  //전체조회
  app.get("/api", dogs.findAll);

  //id조회
  app.get("/api/:dogsId", dogs.findId);
};

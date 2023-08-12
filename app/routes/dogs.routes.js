module.exports = (app) => {
  const dogs = require("../controller/dogs.controller");

  //data insert
  app.post("/api", dogs.create);

  //전체조회
  app.get("/api", dogs.findAll);

  //dog id조회
  app.get("/api/:dogsId", dogs.findId);
};

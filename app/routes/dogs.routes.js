module.exports = (app) => {
  const dogs = require("../controller/dogs.controller");

  app.post("/api", dogs.create);

  //전체조회
  app.get("/api", dogs.findAll);

  //id조회
  app.get("/api/:dogsId", dogs.findId);
};

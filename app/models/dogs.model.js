const sql = require("./db");

const Dogs = function (dogs) {
  this.client_id = dogs.client_id;
  this.client_pw = dogs.client_pw;
  this.dog_name = dogs.dog_name;
  this.breed = dogs.breed;
  this.admission_date = dogs.admission_date;
  this.drink_date = dogs.drink_date;
  this.water = dogs.water;
};

Dogs.create = (obj, result) => {
  sql.query("INSERT INTO user_dog SET ?", obj, (err, res) => {
    if (err) {
      console.log("error:", err);
      result(err, null);
      return;
    }

    console.log("신규 레코드 생성: ", { id: res.insertId, ...obj });
    result(null, { id: res.insertId, ...obj });
  });
};

Dogs.getAll = (result) => {
  sql.query("SELECT * FROM user_dog", (err, res) => {
    if (err) {
      console.log("error:", err);
      result(err, null);
      return;
    }

    console.log("dogs: ", res);
    result(null, res);
  });
};

Dogs.findById = (dogsId, result) => {
  sql.query("SELECT * FROM user_dog WHERE dog_id=?", dogsId, (err, res) => {
    if (err) {
      console.log("error:", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found dog: " + res[0]);
      result(null, res[0]);
      return;
    } else {
      result({ kind: "not_found" }, null);
    }
  });
};

module.exports = Dogs;

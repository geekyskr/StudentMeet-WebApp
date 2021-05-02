const express = require("express");
const router = express.Router();
const mysqlConnection = require("../../../connection");
const bcrypt = require("bcrypt");

// get request on home/register
router.get("/", (req, res, next) => {
  function UniversityNameFunc() {
    return new Promise((resolve, reject) => {
      const UniversityNameQuery = "select universityname from university";
      mysqlConnection.query(UniversityNameQuery, (err, result, fields) => {
        if (!err) resolve(result);
      });
    });
  }

  async function main() {
    const registerPageInformation = await UniversityNameFunc();
    res.send(registerPageInformation);
  }
  main();
});

// post request on home/register
router.post("/", async (req, res, next) => {
  const username = req.body.email;
  const name = req.body.name;
  const email = req.body.email;
  const password = await  bcrypt.hash(req.body.password, 10);
  const college = req.body.college;
  const number = req.body.number;
  mysqlConnection.query(
    "SELECT username FROM students WHERE username = '" + username + "'",
    function (err, usresult, field) {
      if (err) console.log(err);
      if (usresult.length > 0) {
        res.json({ existingUser: true, existingUniversity: true });
      } else {
        mysqlConnection.query(
          "SELECT universityid FROM university WHERE universityname = '" +
            college +
            "'",
          function (err, unresult, field) {
            if (err) console.log(err);
            console.log(unresult.length);
            if (unresult == 0)
              res.json({ existingUser: false, existingUniversity: false });
            else {
              console.log(unresult[0].universityid);
              const dbquery = "insert into students values(?, ?, ?, ?, ?, ?);";
              mysqlConnection.query(
                dbquery,
                [
                  email,
                  name,
                  email,
                  number,
                  password,
                  unresult[0].universityid,
                ],
                (err, result) => {
                  if (err) console.log(err);
                  res.json({ existingUser: false, existingUniversity: true });
                }
              );
            }
          }
        );
      }
    }
  );
});

module.exports = router;

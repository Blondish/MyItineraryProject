const express = require("express");
const userModel = require("../model/userModel");
const router = express.Router();
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");

router.get("/", (req, res) => {
  userModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

router.post(
  "/",
  [
    check("username").isLength({ min: 3 }),
    check("email").isEmail(),
    check("password").isLength({ min: 5 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const newUser = new userModel({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    userModel.findOne({ email: req.body.email }).then(files => {
      if (files) {
        res.send({ message: "User exist!" });
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
              res.send(user);
            });
          });
        });
      }
    });
  }
);

// router.post("/update/:id", (req, res) => {
//   cityModel
//     .findById(req.params.id)
//     .then(city => {
//       city.name = req.body.name;
//       city.country = req.body.country;
//       city
//         .save()
//         .then(() => req.json("city updated"))
//         .catch(error => res.status(400).json("Error" + error));
//     })
//     .catch(error => res.status(400).json("error" + error));
// });

module.exports = router;

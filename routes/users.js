const express = require("express");
const userModel = require("../model/userModel");
const router = express.Router();
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const config = require("config");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  userModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

//route to create a new user account
router.post(
  "/signup",
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

    userModel.findOne({ email: req.body.email }).then(files => {
      if (files) return res.send({ message: "User exist!" });

      const newUser = new userModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          console.log("in");
          newUser.save().then(user => {
            console.log("in");
            jwt.sign(
              { _id: user._id }, //payload
              config.get("jwtSecret"), //get secret token
              { expiresIn: 3600 }, // 1 hour expiry
              (err, token) => {
                //callback
                if (err) throw err;
                console.log(newUser);
                res.json({ token, user });
              }
            );
          });
        });
      });
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

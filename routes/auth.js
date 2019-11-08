const express = require("express");
const userModel = require("../model/userModel");
const router = express.Router();
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/authmiddleware");

//route to log into the existing acct
router.post(
  "/login",
  [check("email").isEmail(), check("password").isLength({ min: 5 })],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    userModel.findOne({ email }).then(user => {
      if (!user) return res.send({ message: "User does not exist!" });
      //validate password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (!isMatch) return res.send({ msg: "Incorrect Password)" });
        jwt.sign(
          { _id: user._id }, //payload
          config.get("jwtSecret"), //get secret token
          { expiresIn: 3600 }, // 1 hour expiry
          (err, token) => {
            //callback
            if (err) throw err;
            res.json({ token, user });
          }
        );
      });
    });
  }
);

//router to see if user is logged in
router.get("/user", auth, (req, res) => {
  userModel
    .findById(req.user._id)
    .select("-password")
    .then(user => res.json(user));
});

module.exports = router;

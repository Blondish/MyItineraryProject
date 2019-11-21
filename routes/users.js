const express = require("express");
const userModel = require("../model/userModel");
const itinModel = require("../model/itineraryModel");
const router = express.Router();
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/authmiddleware");

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
        password: req.body.password,
        favourites: req.body.favourites
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;

          newUser.save().then(user => {
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

router.put("/update", auth, (req, res) => {
  const favouriteItin = req.body.favourite;
  userModel
    .findByIdAndUpdate(req.user._id, { $push: { favourites: favouriteItin } })
    .then(user => res.send(user))
    .catch(error => res.status(400).json("error" + error));
});

router.put("/erase", auth, (req, res) => {
  const favouriteItin = req.body.favourite;
  userModel
    .findByIdAndUpdate(req.user._id, { $pull: { favourites: favouriteItin } })
    .then(user => res.send(user));
});

router.get("/favourites", auth, (req, res) => {
  console.log(req.user);
  userModel
    .findById(req.user._id)
    .then(user => {
      itinModel.find({ _id: { $in: user.favourites } }).then(favs => {
        res.json(favs);
      });
    })
    .catch(err => console.log(err));
});

// router.put("/favorites", auth, (req, res) => {
//   let isInArray = req.user.favourites.some(iti =>
//     iti.equals(req.body.itinerary)
//   );
//   if (!isInArray) {
//     let user = req.user;
//     console.log(user);
//     userModel
//       .findByIdAndUpdate(req.user.id, {
//         favourites: [...req.user.favourites, req.body.itinerary]
//       })
//       .then(user => {
//         res.status(201).send(req.body.itinerary);
//       });
//   } else {
//     userModel
//       .findByIdAndUpdate(req.user.id, {
//         $pull: {
//           favourites: req.body.itinerary
//         }
//       })
//       .then(user => {
//         res.status(202).send(req.body.itinerary);
//       });
//   }
// });

module.exports = router;

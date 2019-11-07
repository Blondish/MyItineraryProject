const express = require("express");
const cityModel = require("../model/cityModel");
const router = express.Router();
const auth = require("../middleware/authmiddleware");

// router.get("/test", (req, res) => {
//   res.send({ msg: "Cities test route." });
// });

router.get("/", (req, res) => {
  cityModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

router.post("/", auth, (req, res) => {
  const newCity = new cityModel({
    name: req.body.name,
    country: req.body.country
  });
  cityModel.findOne({ name: req.body.name }).then(files => {
    console.log(files);
    if (files) {
      res.send({ message: "City exist!" });
    } else {
      newCity.save().then(city => {
        res.send(city);
      });
    }
  });

  //   .catch(err => {
  //     res.status(500).send("Server error");
  //   });
});

router.get("/:name", (req, res) => {
  let cityRequested = req.params.name;
  cityModel
    .findOne({ name: cityRequested })
    .then(city => {
      res.send(city);
    })
    .catch(err => console.log(err));
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  cityModel
    .findById(req.params.id)
    .then(city => res.json(city))
    .catch(error => res.status(400).json("error" + error));
});

router.delete("/:id", auth, (req, res) => {
  console.log(req.params.id);
  cityModel
    .findByIdAndDelete(req.params.id)
    .then(city => res.json("city deleted"))
    .catch(error => res.status(400).json("error" + error));
});

router.post("/update/:id", auth, (req, res) => {
  cityModel
    .findById(req.params.id)
    .then(city => {
      city.name = req.body.name;
      city.country = req.body.country;
      city
        .save()
        .then(() => req.json("city updated"))
        .catch(error => res.status(400).json("Error" + error));
    })
    .catch(error => res.status(400).json("error" + error));
});

module.exports = router;

const express = require("express");
const itineraryModel = require("../model/itineraryModel");
const router = express.Router();

// router.get("/test", (req, res) => {
//   res.send({ msg: "Cities test route." });
// });

router.get("/", (req, res) => {
  itineraryModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

router.get("/:cityid", (req, res) => {
  let cityRequested = req.params.cityid;
  itineraryModel
    .find({ cityid: cityRequested })
    .then(itineraries => {
      res.send(itineraries);
    })
    .catch(err => console.log(err));
});

// router.get("/:id", (req, res) => {
//   console.log(req.params.id);
//   itineraryModel
//     .findById(req.params.id)
//     .then(itinerary => res.json(itinerary))
//     .catch(error => res.status(400).json("error" + error));
// });

module.exports = router;

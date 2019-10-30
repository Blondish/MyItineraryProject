const express = require("express");
const activityModel = require("../model/activityModel");
const router = express.Router();

// router.get("/test", (req, res) => {
//   res.send({ msg: "Cities test route." });
// });

router.get("/", (req, res) => {
  activityModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

router.get("/:itinid", (req, res) => {
  let itinRequested = req.params.itinid;
  activityModel
    .find({ itinid: itinRequested })
    .then(activities => {
      res.send(activities);
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

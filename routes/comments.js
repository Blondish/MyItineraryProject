const express = require("express");
const commentModel = require("../model/commentModel");
const router = express.Router();

// router.get("/test", (req, res) => {
//   res.send({ msg: "Cities test route." });
// });

router.get("/", (req, res) => {
  commentModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

router.get("/:itinid", (req, res) => {
  let itinRequested = req.params.itinid;
  commentModel
    .find({ itinid: itinRequested })
    .then(comments => {
      res.send(comments);
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

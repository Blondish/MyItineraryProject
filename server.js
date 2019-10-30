const mongoose = require("mongoose");
const express = require("express");
const cityRouter = require("./routes/cities");
const itinRouter = require("./routes/itineraries");
const actRouter = require("./routes/activities");
const bodyParser = require("body-parser");
const db = require("./keys").mongoURI;
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/cities", cityRouter);
app.use("/itineraries", itinRouter);
app.use("/activities", actRouter);

app.get("/", (req, res) => {
  res.send({ express: "this is a home" });
});

app.get("/itineraries/:cityid", (req, res) => {
  res.send({ express: "got the cityID" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("database connected"));

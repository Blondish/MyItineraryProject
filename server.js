const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cityRouter = require("./routes/cities");
const itinRouter = require("./routes/itineraries");
const actRouter = require("./routes/activities");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const config = require("config");
const db = config.get("mongoURI");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/cities", cityRouter);
app.use("/itineraries", itinRouter);
app.use("/activities", actRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send({ express: "this is a home" });
});

app.get("/itineraries/:cityid", (req, res) => {
  res.send({ express: "got the cityID" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("database connected"));

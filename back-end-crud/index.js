const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(
"mongodb+srv://ibrahim:03124963808@ibrahim.pxylpua.mongodb.net/"
  )
  .then(() => console.log("connected"))
  .catch((err) => console.log("Connection failed: ", err));

const UserModel = require("./Model/Model");

const PORT = 4000;

// Read: Get all users
app.get("/", (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Create: Add a new user
app.post("/create", (req, res) => {
  UserModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json({ error: err.message }));
});
//Update user
app.put("/UpdateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name, age: req.body.age, email: req.body.email }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
// to get user info to update
app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
//deleting fun
app.delete("/DeleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true,
    min: 0
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  }
});

const UserModel = mongoose.model("test_collections", UserSchema);
module.exports = UserModel;

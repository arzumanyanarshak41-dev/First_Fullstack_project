const { required } = require("joi");
const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const usersSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    set(value) {
      value = value
        .split(" ")
        .map((el) => el[0].toUpperCase() + el.slice(1).toLowerCase())
        .join(" ");
      return value;
    },
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    set(value) {
      return bcrypt.hashSync(value, 10);
    },
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 65,
  },
  isOnline: {
    type: Boolean,
    enum: [true, false],
  },
});
module.exports = model("users", usersSchema);

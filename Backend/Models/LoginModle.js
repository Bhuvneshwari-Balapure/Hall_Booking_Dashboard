const mongoose = require("mongoose");

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  mobile: Number,
  email: String,
  password: String,
});

const UserModel = mongoose.model("user", userSchema);

// Booking Schema
const BookSchema = new mongoose.Schema({
  name: String,
  number: Number,
  Address: String,
  DateOfBook: Date,
  timeForBook: Number,
  purpose: String,
  payment: Number,
});

BookSchema.set("toJSON", {
  transform: (doc, ret) => {
    if (ret.DateOfBook) {
      ret.DateOfBook = ret.DateOfBook.toISOString().split("T")[0]; // Format DateOfBook
    }
    return ret;
  },
});

const BookingModel = mongoose.model("Booking", BookSchema);

module.exports = {
  UserModel,
  BookingModel,
};

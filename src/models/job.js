const mongoose = require("mongoose");

const Job = mongoose.model("Job", {
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  }
});

module.exports = Job;

const mongoose = require("mongoose");

const Post = mongoose.model("Post", {
  job: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  post_content: {
    type: String,
    required: true
  },
  job_location: {
    type: String
  },
  experience: {
    type: String
  },
  salary: {
    type: String
  },
  employment_type: {
    type: String
  }
});

module.exports = Post;

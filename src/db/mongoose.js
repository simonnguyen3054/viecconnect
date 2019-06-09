const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/viecconnect-api", {
  useNewUrlParser: true,
  useCreateIndex: true
});

// const Job = mongoose.model("Job", {
//   name: {
//     type: String,
//     required: true
//   },
//   age: {
//     type: Number,
//     validate(value) {
//       if(value < 0) {
//         throw new Error("Number must be positive")
//       }
//     }
//   }
// })

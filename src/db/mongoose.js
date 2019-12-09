const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// const User = mongoose.model("User", {
//   name: {
//     type: String
//   },
//   age: {
//     type: Number
//   }
// });

// const me = new User({
//   name: "Aviral",
//   age: 20
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch(error => {
//     console.log("Error", error);
//   });

const Tasks = mongoose.model("Tasks", {
  description: {
    type: String
  },
  completed: {
    type: Boolean,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number.");
      }
    }
  }
});

const task = new Tasks({
  description: "Cracking GSOC",
  completed: false
});

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch(error => {
    console.log("Error", error);
  });

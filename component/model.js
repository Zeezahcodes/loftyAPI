const mongoose = require("mongoose");

const schemaStructure = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: [true, "This name already exist"],
  },
  country: {
    type: String,
    required: true,
    unique: [true, "This country already exist"],
  },
  age: {
    type: String,
    required: true,
    unique: [true, "This name already exists"],
  },
});

module.exports = mongoose.model("classes", schemaStructure);

const mongoose = require("mongoose");
const guitarSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: false,
  },
  currency: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

const Guitar = mongoose.model("Guitar", guitarSchema);

module.exports = Guitar;

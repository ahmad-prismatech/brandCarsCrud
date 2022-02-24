const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    logo: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const hey = "hello";
const Brand = mongoose.model("Brand", brandSchema);
module.exports = Brand;

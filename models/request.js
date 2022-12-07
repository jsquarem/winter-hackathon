const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      unique: false
    },
    productPrice: {
      type: Number,
      required: true,
      unique: false
    },
    productURL: {
      type: String,
      required: true,
      unique: false
    },
    fulfilled: {
      type: Boolean,
      default: false
    },
    fulfilledBy: {
      type: String,
      default: null
    },
    fulfilledDate: {
      type: Date,
      default: null
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Request', requestSchema);

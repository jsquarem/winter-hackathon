const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false
    },
    address: {
      street1: {
        type: String,
        required: true
      },
      street2: {
        type: String,
        required: false
      },
      city: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      }
    },
    phone: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('School', schoolSchema);
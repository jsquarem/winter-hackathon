const mongoose = require('mongoose');

const wishListItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: false
    },
    price: {
      type: Number,
      required: true,
      unique: false
    },
    description: {
      type: String,
      required: true,
      unique: false
    },
    productURL: {
      type: String,
      required: true,
      unique: false
    },
    imageURL: {
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

module.exports = mongoose.model('WishListItem', wishListItemSchema);

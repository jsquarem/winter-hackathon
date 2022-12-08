const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    projectTitle: {
      type: String,
      required: true
    },
    projectDescription: {
      type: String,
      required: true
    },
    imageURL: {
      type: String,
      required: false
    },
    wishList: []
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Project', projectSchema);

// { type: mongoose.Schema.Types.ObjectId, ref: 'WishListItem' }

const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema(
  {
    dateEnds: {
      type: Date,
      required: true
    },
    requests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Request' }]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Campaign', campaignSchema);

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    wishList:{
      type: String,
      required: true,
    },
    projectTitle:{
      type:String,
      required:true,
    },
    projectDescription:{
      type:String,
      required:true,
    },
    addMedia:{
      type:String,
      required:true,
    },
    subjectArea:{
      type:String,
      required:true,
    },
    requests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Request' }]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Project', projectSchema);

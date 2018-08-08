const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const mongooseStringQuery = require('mongoose-string-query');

const { Schema } = mongoose;

const ReportsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    required: false,
    default: Date.now()
  },
  position:
        { type: { Object }, required: true }
});

ReportsSchema.plugin(timestamps);
ReportsSchema.plugin(mongooseStringQuery);
const ReportModel = mongoose.model('reports', ReportsSchema);

module.exports = ReportModel;

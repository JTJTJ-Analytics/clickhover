var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;
// var ObjectId = Schema.ObjectId;

var siteSchema = new Schema({
  siteId: { type: Number, required: true, unique: true },
  sessions: { type: Array }
});

siteSchema.plugin(timestamps);

module.exports = mongoose.model("Site", siteSchema);

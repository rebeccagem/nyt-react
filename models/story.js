const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    synopsis: { type: String, required: true },
    url: { type: String, required: true },
    date: { type: Date, default: Date.now }
  });
  
  const Story = mongoose.model("Story", storySchema);
  
  module.exports = Story;
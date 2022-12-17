const { model, Schema } = require("mongoose");

const postSchema = new Schema({
  Company: { type: String, required: true },
  City: { type: String, required: true },
  Location: { type: String, required: true },
  Role: { type: String, required: true },
  Level: { type: String, required: true },
  Role: { type: String, required: true },
  Position: { type: String, required: true },
  Language: { type: String, required: true },
  Contract: { type: String, required: true },

  PostedAt: {
    type: String,
    default:  new Date().toLocaleString()
  },
});

const PostModel = model("post", postSchema);

module.exports =PostModel;

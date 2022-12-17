const express = require("express");
const app = express.Router();
const PostModel = require("../Model/Post.Model");

app.get("/", async (req, res) => {
  try {
    let post = await PostModel.find();
    return res.send(post);
  } catch (e) {
    return res.send(e);
  }
});


app.post("/filter", async (req, res) => {


  try {
    let post = await PostModel.find(req.body);
    return res.send(post);
  } catch (e) {
    return res.send(e);
  }
});


app.post("/create", async (req, res) => {
  // console.log("signup")

  try {
    const post = new PostModel(req.body);
    await post.save();
    console.log(post);
    return res.send("Post created successfully");
  } catch (err) {
    console.log(err);
    return res.status(401).send(err);
  }
});



app.post("/sort", async (req, res) => {
  // console.log("signup")
  try {
    let post = await PostModel.find().sort(req.body);
    return res.send(post);
  } catch (e) {
    return res.send(e);
  }


});


// •	db.users.find({"age": {$lt: 80}}, {"age": 1, "_id": 0}).sort({age: -1})
module.exports = app;

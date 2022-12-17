const express = require("express");
const app = express.Router();
const PostModel = require("../Model/Post.Model");

app.get("/", async (req, res) => {

try{

let post=await PostModel.find()
return res.send(post)

}catch(e){

return res.send(e)

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


module.exports = app;

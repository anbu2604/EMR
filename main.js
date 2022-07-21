const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json())


mongoose.connect("mongodb://127.0.0.1/signup", {
      useNewUrlParser : true,
      useUnifiedTopology :true
}, (err)=>{
      if(!err){
            console.log("connected to database")
      }else {
            console.log(err)
      }
});

const Schema ={
      phoneno:String,
      Pinnumber:String,
      password:String
      
};
const model = mongoose.model("USER", Schema);


app.post("/signup", async (req, res)=>{
      console.log(" collect data from user");

      const data = new model({
            phoneno: req.body.phoneno,
            Pinnumber: req.body.Pinnumber,
            password: req.body.password
      });

      const value = await data.save();
      res.json(value);
});


app.get("/user/:name", function(req, res){
      username = req.params.name;
      model.find(({name:username}), function(err, value){
            
            res.send(value);
      })
});

app.listen(3000,()=>{

      console.log("server is running......")
});
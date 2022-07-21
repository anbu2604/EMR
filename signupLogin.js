const express = require("express");
const app = express();
const mongoose = require("mongoose");
const{check, validationResult}= require("express-validator");
app.use(express.json());

mongoose.connect("mongodb+srv://myapi:VDTASDS0zR3y92gH@cluster0.ngaoa.mongodb.net/?retryWrites=true&w=majority",()=>{
      console.log("DATABASE CONNECTED..")      

});
// SCHEMA...
const schema ={
      
      email:{
            type:String,
            required:true
      },
      password:{
            type:String,
            required:true
      }
};
const model =mongoose.model("employee", schema);

// SIGNUP ROUTE.......
app.post("/signup",[
      
      check("email","Please provide a valid email").isEmail({min:6}),
      check("password").isLength({min:6})
],async(req, res)=>{
            const user= new model({
            
            email:req.body.email,
            password:req.body.password
      })
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
      const value = await user.save();
      res.json(value);
});


// LOGIN ROUTE....
app.post("/login", async(req, res)=>{
      const user={
            email,
            password}=req.body;
            
      
      try{
            const logger = model.findOne(user.email === email);
            res.json({message:"Loggin Successfully"});
            if(!logger) throw new Error("User does not exist");
      }catch(err){
            res.send("err")
      }
})





app.listen(8888, ()=>{
      console.log("server running || port 8888")
});
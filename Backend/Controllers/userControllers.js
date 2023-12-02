const expressAsyncHandler = require('express-async-handler');
const asyncHandler = require('express-async-handler')
const User = require("../models/userModels");
const generateToken  = require('../util/generateToken');

const registerUser = asyncHandler(async (req, res) => {

    // taking name,email and pwd from user
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    // If user exists then show error
    if (userExists) {
        res.status(404);
        throw new Error("User already exists");
    }

    // else if user does not exist then create a new for this we use .create function
    // Calling userModels.js file
    const user = await User.create({
        name,
        email,
        password,
    });

    // if user is successfully created that is the input follows the schema then this condition ->if(user)
    if (user) {
        // send response in json file
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),    //json web token see video 10 from 30:00
        });
    } else {
        res.status(400);
        throw new Error("User not found");
    }
});


const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
      // .matchPassword is a function i.e is declared in userModel.js file which would decrypt the password
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id), 
        links:user.links,
        bgimg:user.bgimg,
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  });

const update=asyncHandler(async(req,res)=>{
  const { email,links } = req.body;
  try{
  const user = await User.findOne({ email });
  user.links = links;
  await user.save();
  console.log(user.links);
  res.status(200).json({"links":user.links});
  }catch(err){
    res.status(400).json(err.response);
  }
})
const save=asyncHandler(async(req,res)=>{
  const {email,links,bg,name}=req.body;
  try{
    const user = await User.findOne({ email });
    user.links = links;
    user.bgimg=bg;
    user.name=name;
    await user.save();
    res.status(200).json('Saved successfully');
    }catch(err){
      res.status(400).json(err.response);
    }
})
module.exports = { registerUser,authUser,update,save};
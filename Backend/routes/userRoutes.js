const {protect}=require('../middlewares/authMiddleware')
const express=require('express')

const router=express.Router()
const { registerUser, authUser,update }=require('../Controllers/userControllers')

// if user goes to api/users/ - it is register page
router.route('/').post(registerUser);


// if user goes to api/users/login it is login page
router.route('/login').post(authUser);

router.route('/update').put(update);

module.exports=router;
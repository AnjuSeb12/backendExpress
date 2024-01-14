const express=require("express");
const { getRegister, postRegister, userLogin } = require("../controllers/userController");
const router=express.Router();







router.route('/register').get(getRegister).post(postRegister);
router.route('/login').post(userLogin);


module.exports=router;
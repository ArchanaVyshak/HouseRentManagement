const router = require("express").Router();
const User = require("../models/User");

router.get("/usertest",(req,res)=>{
    res.send("test success");
});

router.post("/userposttest",(req,res)=>{
    const username = req.body.username;
    res.status(200).json(username);
});



module.exports = router
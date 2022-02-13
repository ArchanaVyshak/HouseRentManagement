const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne(
            {
                username: req.body.username
            }
        );
        !user && res.status(401).json("Wrong User Name");

        // var encryptedPassword = user.password;
        // console.log(encryptedPassword);
        // var originalPassword = CryptoJS.AES.decrypt(encryptedPassword,process.env.PASS_SEC);
        // //.toString(CryptoJS.enc.Utf8)
        // console.log(originalPassword);
        
        // var words = CryptoJS.enc.Base64.parse(originalPassword);
        // var textString = words.toString(CryptoJS.enc.Utf8);
        // console.log(textString);
        
        // var decryptedData = JSON.parse(originalPassword.toString(CryptoJS.enc.Base64)); 
        // console.log(originalPassword);

        var originalPassword = user.password;
        var inputPassword = req.body.password;  
        originalPassword != inputPassword && res.status(401).json("Wrong Password");
        const accessToken = jwt.sign(
        {
            id: user._id,
        },
        process.env.JWT_SEC,
            {expiresIn:"60s"}
        );
        const { password, ...others } = user._doc;  
        res.status(200).json({...others, accessToken});
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router
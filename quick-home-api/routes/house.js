const House = require("../models/House");
const router = require("express").Router();

router.get("/housetest",(req,res)=>{
    res.send("test success");
    console.log("SS")
});

//CREATE

router.post("/", async (req, res) => {
    const newHouse = new House(req.body);
  
    try {
      const savedHouse = await newHouse.save();
      res.status(200).json(savedHouse);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
//GET HOUSE BY CATEGORY
router.get("/find/:id", async (req, res) => {
    try {
      const house = await House.findById(req.params.id);
      res.status(200).json(house);
    } catch (err) {
      res.status(500).json(err);
    }
  });



  //GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let house;

    if (qNew) {
      house = await House.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      house = await House.find({
        category: {
          $in: [qCategory],
        },
      });
    } else {
      house = await House.find();
    }

    res.status(200).json(house);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
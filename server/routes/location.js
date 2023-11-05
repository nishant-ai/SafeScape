const router = require("express").Router();
const Location = require("../models/Location");

router.get("/", async (req, res) => {
  res.send(`Location API!`);
});

router.post("/add-locations", async (req, res) => {
  try {
    let { data } = req.body;
    await Location.insertMany(data);
    res.status(201).json({ message: "location added" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.toString() });
  }
});

// All Locations (District, State)
router.get("/all", async (req, res) => {
  //find all locations
  try {
    const locationList = await Location.find().sort({ _id: -1 });
    if (!locationList) {
      throw new Error("No location found");
    }
    return res.status(200).json(locationList);
  } catch (e) {
    return res
      .status(400)
      .json({ msg: "Error getting the data from database" });
  }
});

module.exports = router;

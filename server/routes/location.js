const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send(`Location API!`);
});

// All Locations (District, State)
router.get("/all", async (req, res) => {
  const location = await Location.find({});
  res.send(location);
});

module.exports = router;

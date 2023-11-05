const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send(`Crime API!`);
});

// Create Crime (Check User Location to Verify)
router.post("/create", async (req, res) => {
  const { year, district, state, crime_type, crime_rate } = req.body;
  const crime = new Crime({
    year,
    district,
    state,
    crime_type,
    crime_rate,
  });

  await crime.save();
  res.send(crime);
});

// Retrieve All Crime
router.get("/all", async (req, res) => {
  const crime = await Crime.find({});
  res.send(crime);
});

// Retrieve Crime Per Location
router.get("/:state/:district", async (req, res) => {
  const { state, district } = req.params;
  const crime = await Crime.find({ state, district });
  res.send(crime);
});

module.exports = router;

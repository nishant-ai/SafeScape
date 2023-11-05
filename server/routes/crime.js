const axios = require("axios");
const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send(`Crime API!`);
});

router.post("/create", async (req, res) => {
  const { latitude, longitude } = req.body;

  // Get Location
  endpoint = `https://api.api-ninjas.com/v1/reversegeocoding?lat=${latitude}&lon=${longitude}`;

  const latlong_to_locname = async () => {
    const loc = await axios.get(
      endpoint,
      (headers = {
        "X-Api-Key": process.env.API_NINJAS_KEY,
      })
    );
    return loc;
  };

  const location = latlong_to_locname();
  const district = location[0].name;
  const state = location[0].state;

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

// Create Crime (Check User Location to Verify)
router.post("/create-by-admin", async (req, res) => {
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

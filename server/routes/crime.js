const axios = require("axios");
const router = require("express").Router();
const Crime = require("../models/Crime");
const Location = require("../models/Location");

router.get("/", async (req, res) => {
  res.send(`Crime API!`);
});

router.post("/create", async (req, res) => {
  const { latitude, longitude, CrimeType } = req.body;

  // Get Location
  endpoint = `https://api.api-ninjas.com/v1/reversegeocoding?lat=${latitude}&lon=${longitude}`;
  console.log(process.env.VITE_API_NINJAS_KEY);

  const latlong_to_locname = async () => {
    const loc = await axios.get(
      endpoint,
      (headers = {
        "X-Api-Key": process.env.VITE_API_NINJAS_KEY,
      })
    );
    return loc;
  };
  
  const location = await latlong_to_locname();
  console.log(location);
  const district = location[0].name;
  const state = location[0].state;
  //if Year does not come then take current year
  let date = new Date().getFullYear();
  Year = date;

  const crime = new Crime({
    Year,
    District,
    State,
    CrimeType,
    CrimeRate,
  });

  const loc = `${district}, ${state}`;
  try {
    if (Location.findOne(loc)) {
      console.log("location already exists");
    } else {
      let newLoc = new Location({
        location: loc,
      });
      await newLoc.save();
    }
  } catch (err) {
    console.error(err.message);
  }
  try {
    await crime.save();
    res.status(201).json("Crime created!");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error creating a crime.");
  }{ District, State }
  res.send(crime);
});

// Create Crime (Check User Location to Verify)
router.post("/create-by-admin", async (req, res) => {
  const obj = req.body;
  // const crime = new Crime({
  //   Year,
  //   District,
  //   State,
  //   CrimeType,
  //   CrimeRate,
  // });

  await Crime.insertMany(obj);
  res.json("Data inserted successfully");
  res.send("okay");
});

// Retrieve All Crime
router.get("/all", async (req, res) => {
  const crime = await Crime.find({});
  res.send(crime);
});

// Retrieve Crime Per Location
router.get("/getlocation/:location", async (req, res) => {
  const locationString = req.params.location;
  const keyValuePairs = locationString.split('&');
  const District = keyValuePairs[0].split('=')[1];
const State = keyValuePairs[1].split('=')[1];
  // const [state, district] = locationString.split(', ');
  const crime = await Crime.find({ District, State });
  console.log(crime);
  res.send(crime);
});

module.exports = router;

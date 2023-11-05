const crypto = require("crypto");
const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send(`User API!`);
});

// Create User
router.get("/create", async (req, res) => {
  const api_key = crypto.randomBytes(25).toString("hex");

  console.log(randomString);

  const user = new User({
    api_key,
  });

  await user.save();
  res.send(user);
});

module.exports = router;

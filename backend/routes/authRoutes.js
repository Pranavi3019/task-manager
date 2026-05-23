const express = require("express");
const router = express.Router();

router.post("/login", async (req, res) => {
  res.json({ message: "Login route working" });
});

module.exports = router;
const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.status(200).send("Welcome to MERN project using router");
// });
// BOTH WAY YOU CAN USE

router.route("/").get((req, res) => {
    res.status(200).send("Welcome to MERN project using router.route");
  });

router.route("/register").get((req, res) => {
    res.status(200).send("Registration Page");
  });


module.exports = router;

const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controllers");

// router.get("/", (req, res) => {
//   res.status(200).send("Welcome to MERN project using router");
// });
// BOTH WAY YOU CAN USE

router.route("/").get(authController.home);

router.route("/register").post(authController.register);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  signin,
  signup,
  isAuthenticated,
  getdetails,
} = require("../UserController");

router.post(
  "/signup",
  
  signup
);

router.post("/signin", signin);

router.get("/user/:userId/details", isAuthenticated, getdetails);

module.exports = router;
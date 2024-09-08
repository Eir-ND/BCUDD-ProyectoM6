const express = require("express");
const router = express.Router();

const auth = require("../middleware/authorization");

const {
  signUp,
  signIn,
  verifyToken,
  update,
} = require("../controllers/auth.controller");

router.post("/register", signUp);
router.post("/login", signIn);
router.get("/verifytoken", auth, verifyToken);
router.put("/update", auth, update);

module.exports = router;

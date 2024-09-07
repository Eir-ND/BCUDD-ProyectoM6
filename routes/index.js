const express = require("express");
const router = express.Router();

const guitarRouter = require("./guitar.routes");
const authRouter = require("./auth.routes");

router.use("/product", guitarRouter);
router.use("/user", authRouter);

module.exports = router;

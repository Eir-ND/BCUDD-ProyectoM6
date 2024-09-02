const express = require("express");
const router = express.Router();

const guitarRouter = require("./guitar.routes");

router.use("/product", guitarRouter);

module.exports = router;

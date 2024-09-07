const express = require("express");
const router = express.Router();

const auth = require("../middleware/authorization");

const {
  findAll,
  findOne,
  create,
  update,
  remove,
} = require("../controllers/guitar.controller");

router.get("/readall", findAll);
router.get("/readone/:id", findOne);
router.post("/create", auth, create);
router.put("/update/:id", auth, update);
router.delete("/delete/:id", auth, remove);

module.exports = router;

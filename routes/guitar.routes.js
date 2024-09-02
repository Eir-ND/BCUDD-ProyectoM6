const express = require("express");
const router = express.Router();

const {
  findAll,
  findOne,
  create,
  update,
  remove,
} = require("../controllers/guitar.controller");

router.get("/readall", findAll);
router.get("/readone/:id", findOne);
router.post("/create", create);
router.put("/update/:id", update);
router.delete("/delete/:id", remove);

module.exports = router;

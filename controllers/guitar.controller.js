const Guitar = require("../models/guitar.model");

const findAll = async (req, res) => {
  try {
    const result = await Guitar.find({});
    res.json({
      msg: "Products successfully obtained",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error getting products", error });
  }
};

const findOne = async (req, res) => {
  try {
    const result = await Guitar.findById(req.params.id);
    res.json({
      msg: "Product successfully obtained",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error getting product", error });
  }
};

const create = async (req, res) => {
  try {
    const { name, description, currency, price } = req.body;
    const result = await Guitar.create({ name, description, currency, price });
    res.json({
      msg: "Product successfully created",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error creating a product", error });
  }
};

const update = async (req, res) => {
  try {
    const { name, description, currency, price } = req.body;
    const result = await Guitar.findByIdAndUpdate(
      req.params.id,
      { name, description, currency, price },
      { new: true }
    );
    res.json({
      msg: "Products successfully updated",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error updating a product", error });
  }
};

const remove = async (req, res) => {
  try {
    const result = await Guitar.findByIdAndDelete(req.params.id);
    res.json({
      msg: "Products successfully deleted",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error deleting a product", error });
  }
};

module.exports = { findAll, findOne, create, update, remove };

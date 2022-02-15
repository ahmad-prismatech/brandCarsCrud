const express = require("express");
const router = express.Router();
const {
  addNewBrand,
  getAllBrands,
  getBrandById,
  updateBrandById,
  deleteBrandById,
} = require("../../services/controllers/brand.controller");

//Add new Brand
router.post("/", addNewBrand);

//get all brands
router.get("/", getAllBrands);

//get brand by id
router.post("/brandId", getBrandById);

//update brand by id
router.post("/update", updateBrandById);

//delete brand by id
router.post("/delete", deleteBrandById);

module.exports = router;

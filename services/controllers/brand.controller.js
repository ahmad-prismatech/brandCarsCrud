const Brand = require("../../models/Brand.model");

//add new brand
const addNewBrand = async (req, res) => {
  try {
    if (!req.body.name) {
      res.status(404).json({
        status: "404",
        message: "Name of brand is required",
      });
    }
    if (!req.body.description) {
      res.status(404).json({
        status: "404",
        message: "Description of brand is required",
      });
    }
    //checking brand in db
    const checkBrand = await Brand.findOne({
      name: req.body.name,
      description: req.body.description,
    });
    if (checkBrand) {
      res.status(409).json({
        status: "409",
        message: "Brand already exists",
      });
    } else {
      //adding brand
      await new Brand({
        name: req.body.name,
        description: req.body.description,
        logo: req.body.logo,
      })
        .save()
        .then((brand) => {
          res.status(200).json({
            status: "200",
            message: "Success",
            data: brand,
          });
        })
        .catch((error) => {
          res.status(500).json({
            status: "500",
            message: `Error saving brand in db, ${error}`,
          });
        });
    }
  } catch (err) {
    res.status(500).json({
      status: "500",
      message: `Unexpected Error: ${err}`,
    });
  }
};

//get all brands
const getAllBrands = async (req, res) => {
  try {
    let allBrands = await Brand.find();
    if (allBrands.length === 0) {
      res.status(400).json({
        status: "400",
        message: "No Data Found!",
      });
    } else {
      res.status(200).json({
        status: "200",
        message: "Success",
        data: allBrands,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "500",
      message: `Unexpected Error: ${err}`,
    });
  }
};

//get brand by brandId
const getBrandById = async (req, res) => {
  try {
    const brand = await Brand.findOne({ _id: req.body.brandId });
    if (brand) {
      res.status(200).json({
        status: "200",
        message: "Success",
        data: brand,
      });
    } else {
      res.status(400).json({
        status: "400",
        message: "Not Found!",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "500",
      message: `Unexpected Error: ${err}`,
    });
  }
};

//update by brandId
const updateBrandById = async (req, res) => {
  try {
    await Brand.findOneAndUpdate({ _id: req.body.brandId }, req.body, {
      new: true,
    })
      .then((updatedBrand) => {
        res.status(200).json({
          status: "200",
          message: "Success",
          data: updatedBrand,
        });
      })
      .catch((err) => {
        res.status(500).json({
          status: "500",
          message: `Error while updating ${err}`,
        });
      });
  } catch (err) {
    res.status(500).json({
      status: "500",
      message: `Unexpected Error: ${err}`,
    });
  }
};

//delete by Id
const deleteBrandById = async (req, res) => {
  try {
    await Brand.findByIdAndDelete(req.body.brandId);
    res.status(200).json({
      status: "200",
      message: "Deleted!",
    });
  } catch (err) {
    res.status(500).json({
      status: "500",
      message: `Unexpected Error: ${err}`,
    });
  }
};

module.exports = {
  addNewBrand,
  getAllBrands,
  getBrandById,
  updateBrandById,
  deleteBrandById,
};

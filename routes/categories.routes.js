const categoryController = require("../controllers/categories.controller");
const express = require("express");
const router = express.Router();

router.post("/category", categoryController.create);
router.get("/category", categoryController.findAll);
router.get("/category", categoryController.findOne);
router.put("/category", categoryController.update);
router.delete("/category", categoryController.delete); 


module.exports = router;
const express = require("express");
const router = express.Router();
const { uploadCustomerImage } = require("../controller/customer-image-controller");
const upload = require("../middlewares/upload");
const authToken = require("../middlewares/verifyToken");

// Upload image for a specific customer
router.post("/image/:id", authToken, upload.single("image"), uploadCustomerImage);

module.exports = router;

const express = require("express");

const router = express.Router();

const {
  saveCustomer,
  deleteCustomer,
  getAllCustomer,
  updateCustomer,
  getCustomerById,
} = require("../controller/customer-controller");

const authToken = require("../middlewares/verifyToken")

router.get("/", authToken, getAllCustomer);
router.post("/", authToken, saveCustomer);
router.delete("/:id", deleteCustomer);
router.put("/:id", updateCustomer);
router.get("/:id", getCustomerById);

module.exports = router;

// The path variable is the id of the customer as set as 
// :id in the routes in express not like in Spring Boot {} 
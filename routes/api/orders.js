const express = require("express");
const router = express.Router();
const {
  createOrder,
  getOrders,
} = require("../../controllers/ordersController");
const { protect } = require("../../middleware/authMiddleware");

router.route("/").post(protect, createOrder).get(protect, getOrders);

module.exports = router;

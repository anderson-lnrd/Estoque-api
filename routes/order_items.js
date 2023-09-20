import express from "express";
import { getOrderItems } from "../controllers/order_item.js";

const router = express.Router();

router.get('/', getOrderItems);

export default router
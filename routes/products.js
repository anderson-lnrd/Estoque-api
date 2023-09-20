import express from "express";
import { getProducts } from "../controllers/product.js";
import { postProduct } from "../controllers/product.js";
import { putProduct } from "../controllers/product.js";
import { deleteProduct } from "../controllers/product.js";

const router = express.Router();

router.get('/', getProducts);

router.post("/", postProduct)

router.put("/:product_id", putProduct)

router.delete("/:product_id", deleteProduct)


export default router
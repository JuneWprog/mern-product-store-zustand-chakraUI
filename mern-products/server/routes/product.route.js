import {updateProduct, deleteProduct, createProduct, getProductById, getProducts} from "../controllers/product.controller.js";
import express from "express";
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../Controllers/products.controller.js";
import express from "express";
import { userInfo } from "os";

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

router.patch("/:id", updateProduct);

export default router;

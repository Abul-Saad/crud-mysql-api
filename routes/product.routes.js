import express from 'express';
import ProductController from '../controllers/product.controller.js';
import productController from '../controllers/product.controller.js';

const router = express.Router();

router.get("/all-products", ProductController.getProducts);
router.get("/get-product/:id", ProductController.getProduct);
router.post("/add-product", ProductController.Createproduct);
router.put("/update-product/:id", productController.UpdateProduct);
router.delete("/delete-product/:id", productController.DeleteProduct);


export default router;
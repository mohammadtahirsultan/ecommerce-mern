import express from "express";
import {
  getAllProducts,
  newProduct,
  updateProduct,
  deleteProduct,
  productDetails,
  userReview,
  getAllReviews,
  deleteReview,
  getAdminProducts,
} from "../controllers/product.js";
import isAuthenticated, { adminRoutes } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, adminRoutes, newProduct);
router.get("/all", getAllProducts);

router.put("/review", isAuthenticated, userReview);
router.get("/reviews/all", isAuthenticated, adminRoutes, getAllReviews);
router.delete("/review", isAuthenticated, adminRoutes, deleteReview);

router.get("/admin/products", isAuthenticated, adminRoutes, getAdminProducts);
router
  .route("/:id")
  .put(isAuthenticated, adminRoutes, updateProduct)
  .delete(isAuthenticated, adminRoutes, deleteProduct)
  .get(productDetails);
// router.get("/:id", productDetails);

export default router;

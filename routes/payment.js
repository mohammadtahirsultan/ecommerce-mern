import express from "express";
import isAuthenticated from "../middlewares/auth.js";
import { processPayment,sendStripeApiKey } from "../controllers/payment.js";

const router = express.Router();


router.post("/process", isAuthenticated,processPayment);
router.get("/stripeapikey", isAuthenticated, sendStripeApiKey);



export default router;
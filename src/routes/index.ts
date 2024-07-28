import express from "express";

import authRouter from "./auth";
import userRouter from "./user";
import farmRouter from "./farm";
import productRouter from "./product";
import minioRouter from "./minio";
import cartItemRouter from "./cartItems";
import orderRouter from "./orders";

//Creating router object
const router = express();

//Route to handle user authentication
router.use("/auth", authRouter);

//Route to handle user operations
router.use("/user", userRouter);

//Route to handle farm operations
router.use("/farm", farmRouter);

//Route to handle product operations
router.use("/product", productRouter);

//Route to handle minio operations
router.use("/uploadUrl", minioRouter);

//Route to handle cartItem operations
router.use("/cartItems", cartItemRouter);

//Route to handle order operations
router.use("/orders", orderRouter);

export default router;

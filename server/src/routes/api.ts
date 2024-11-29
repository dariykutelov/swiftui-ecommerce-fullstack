import express from "express";

// routers
import productsRouter from "./products/products.route";

const api = express.Router();

// Register routes
api.use("/products", productsRouter);

export { api };

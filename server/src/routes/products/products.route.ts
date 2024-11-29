import express from "express";

const productsRouter = express.Router();

import { httpGetProducts } from "./products.controller";

productsRouter.get("/", httpGetProducts);

export default productsRouter;

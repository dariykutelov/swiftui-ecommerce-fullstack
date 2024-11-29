import express, { json, urlencoded } from "express";
import morgan from "morgan";
import cors from "cors";

import { api } from "./routes/api";
import "./db";
const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());

app.use(morgan("combined"));
app.use(cors());

app.use(express.json());
app.use("/api/v1", api);

export { app };

import express from "express";
import userRoutes from "./routes/UserRoutes.js";
import { loggerMiddleware } from "./middleware/loggerMiddleware.js";

const app = express();

// Built-in middleware
app.use(express.json());

// Custom logging middleware
app.use(loggerMiddleware);

// Mount user routes
app.use("/api/users", userRoutes);

export default app;
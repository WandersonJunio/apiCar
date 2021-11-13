import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";

const router = Router();

console.log("Entrei no middlware")
router.use("/categories", categoriesRoutes);

export default router;

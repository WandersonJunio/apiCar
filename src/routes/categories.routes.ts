import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listAllCateriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();
const upload = multer({ dest: "./tmp" });

categoriesRoutes.post("/category", (req, res) => { return createCategoryController.handle(req, res) });
categoriesRoutes.get("/categories/list", (req, res) => { return listAllCateriesController.handle(req, res)});
categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
  console.log("Entrei no controller")
  const { file } = req;
  console.log(file)
});

export  { categoriesRoutes };

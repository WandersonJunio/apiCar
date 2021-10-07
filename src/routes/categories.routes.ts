import { Router } from "express";
import { CategoriesRipository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const CategoriesRepository = new CategoriesRipository();

categoriesRoutes.post("/category", (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(CategoriesRepository);
  createCategoryService.execute({ name, description });

  return res.status(201).send();
});

categoriesRoutes.get("/list", (req, res) => {
  const categories = CategoriesRepository.list();

  return res.status(200).json({ categories });
})

export  { categoriesRoutes };

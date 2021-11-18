import ImportCategoryUseCase from "./ImportCategoryUseCase";
import ImportCategoryController from "./ImportCategoryController";
import { CategoriesRipository } from "../../../repositories/CategoriesRepository";

const categoryRepository = CategoriesRipository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController };

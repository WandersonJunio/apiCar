import { CategoriesRipository } from "../../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./listCategoriesController";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";

const listAllCategoriesRepository = CategoriesRipository.getInstance();
const listAllCategories = new ListCategoriesUseCase(listAllCategoriesRepository);
const listAllCateriesController = new ListCategoriesController(listAllCategories);

export { listAllCateriesController };

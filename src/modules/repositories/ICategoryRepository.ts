import { Category } from "../cars/model/Category";
import { ICategoryDTO } from "./CategoriesRepository";

interface ICategoryRepository {
  findByName(name: string): boolean ;
  create({ description, name }: ICategoryDTO): void;
  list(): Category[];
}

export { ICategoryRepository };

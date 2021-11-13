import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";

class ListCategoriesController {
  
  constructor(private listCategoriesuseCase: ListCategoriesUseCase) {};

  public async handle(request: Request, response: Response) {
    try {
      const categories =  await this.listCategoriesuseCase.listAll();

      const responseCategories = {
        total: categories.length,
        categories: categories
      };

      return response.json(responseCategories).send();
    } catch (error) {
      response.json({ error: { message: error } })
    }
  }
}

export { ListCategoriesController };

import { CreateCategoryUseCase } from "./CreateCategoryUseCaase";
import { Request, Response } from "express";

class CreateCategoryController {

  constructor(private createCategoryUseCase: CreateCategoryUseCase ) {}

  handle(request: Request, response: Response) {
    const { name, description } = request.body;
    if (!name || !description) {
      throw "No name or description body has found!";
    }

    this.createCategoryUseCase.execute({ name, description });
    return response.status(201).send();
  }
}

export { CreateCategoryController };

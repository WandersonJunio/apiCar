import ImportCategoryUseCase from "./ImportCategoryUseCase";
import { Request, Response } from "express";

export default class ImportCategoryController {

  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { file } = request;

      this.importCategoryUseCase.execute(file);
      return response.send();
    } catch (error) {
      response.json({error: error});
    }
  }
}

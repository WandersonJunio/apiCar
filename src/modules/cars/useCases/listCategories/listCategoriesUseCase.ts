import { CategoriesRipository } from "../../../repositories/CategoriesRepository";
import { Category } from "../../model/Category";

class ListCategoriesUseCase {

  constructor(private listCategoriesRepository: CategoriesRipository) {};
  
  public async listAll(): Promise<Array<any>> {
    console.log(this.listCategoriesRepository.list())
    return this.listCategoriesRepository.list();
  }
}

export { ListCategoriesUseCase };

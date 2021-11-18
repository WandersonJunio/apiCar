import { CategoriesRipository } from "../../../repositories/CategoriesRepository";
import fs from 'fs';
import csvParse from "csv-parse";

interface IImportCategories {
  name: string;
  description: string;
}

export default class ImportCategoryUseCase {

  constructor(private categoryRepository: CategoriesRipository) { };

loadCategories(file: Express.Multer.File): Promise<IImportCategories[]> {
    return new Promise((resolve) => {
      const categories: IImportCategories[] = [];
      const stream = fs.createReadStream(file.path);
      const fileParse = csvParse();

      stream.pipe(fileParse);

      fileParse.on("data", async (line) => {
        const [ name, description ] = line;

        categories.push({
          name,
          description
        })
      })
        .on("end", () => { resolve(categories) })
    })
  };

  async execute(file: Express.Multer.File){
    const categories = await this.loadCategories(file);

    categories.map((category) => {
      const { name, description } = category;
      this.categoryRepository.create({ name, description});
    });

    console.log(this.categoryRepository)
  }
}

import { Category } from "../cars/model/Category";

interface ICategoryDTO {
  name: string;
  description: string;
}

class CategoriesRipository {
  private categories: Category[];

  constructor () {
    this.categories = [];
  }

  create({ description, name }: ICategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    })

    this.categories.push( category );
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): boolean {
    const category = this.categories.find((category) => {
      category.name === name;
    })
category
    return category ? true : false;
  }
}

export { CategoriesRipository, ICategoryDTO };

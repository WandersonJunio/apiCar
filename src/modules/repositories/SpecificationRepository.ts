import Specification from "../cars/model/Specification";
import { ISpecificationRepository, ICreateSpecificationDTO } from "./ISpecificationRepository";


class SpecificationRepository implements ISpecificationRepository
 {
  private specification: Specification[];

  constructor() {
    this.specification = [];
  }

  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specification.push(specification)
  }

  findByName(name: string): Specification {
    const specification = this.specification.find((specification) => {
      return specification.name == name;
    })

    return specification;
  }
}

export default SpecificationRepository;

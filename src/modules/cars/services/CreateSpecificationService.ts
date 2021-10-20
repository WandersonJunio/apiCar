import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {};

  execute({ name, description }: IRequest): void {
    const alreadyExists = this.specificationRepository.findByName(name);

    if (alreadyExists) {
      throw new Error("Specification already exists!");
    }

    this.specificationRepository.create({
      name,
      description,
    });
  }
}


export { CreateSpecificationService };

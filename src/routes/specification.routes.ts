import { Router } from "express";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";
import SpecificationRepository from "../modules/repositories/SpecificationRepository";

const specificationRoutes = Router();
specificationRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const specificationRepository = new SpecificationRepository();

  const createSpecificationService = new CreateSpecificationService(specificationRepository);
  createSpecificationService.execute({name, description});

  return res.status(201).send();
})

export { specificationRoutes };

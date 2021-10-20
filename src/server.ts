import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';
import { specificationRoutes } from './routes/specification.routes';

import "../src/database/index.ts";

const app = express();
app.use(express.json());
app.use(categoriesRoutes);
app.use("categories", categoriesRoutes);
app.use("/specification", specificationRoutes);

app.listen(3333, () => console.log("Server is runing"));

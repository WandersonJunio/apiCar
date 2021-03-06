import express from 'express';
import router from './routes/index';
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";
// import "../src/database/index.ts";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(router);

app.listen(3000, () => console.log("Server is runing"));

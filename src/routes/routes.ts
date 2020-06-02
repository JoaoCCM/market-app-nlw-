import express from "express";
const route = express.Router();
import PointsController from "../controllers/PointsController";
import ItemsController from "../controllers/ItemsController";

import knex from "../database/connection";

const pointsController = new PointsController();
const itemsController = new ItemsController();

route.get("/items", itemsController.index);

route.post("/points", pointsController.create);
route.get("/points", pointsController.index);
route.get("/points/:id", pointsController.show);

export default route;

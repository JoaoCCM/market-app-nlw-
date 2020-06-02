import { Request, Response } from "express";
import knex from "../database/connection";

class ItemsController {
    async index(req: Request, res: Response) {
        const items = await knex("items").select("*");

        const serializedItems = items.map((item) => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:5000/uploads/${item.image}`,
            };
        });

        return res.json(items);
    }
}

export default ItemsController;

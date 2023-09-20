import { db } from "../db.js";

export const getOrders = (_, response) => {
    const query = "SELECT * FROM estoque.order";

    db.query(query, (err, data) => {
        if(err) return response.json(err);

        return response.status(200).json(data);
    });
}
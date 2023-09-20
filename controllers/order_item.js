import { db } from "../db.js";

export const getOrderItems = (_, response) => {
    const query = "SELECT * FROM order_item";

    db.query(query, (err, data) => {
        if(err) return response.json(err);

        return response.status(200).json(data);
    });
}
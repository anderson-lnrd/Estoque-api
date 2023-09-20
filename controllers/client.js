import { db } from "../db.js";

export const getClients = (_, response) => {
    const query = "SELECT * FROM client";

    db.query(query, (err, data) => {
        if(err) return response.json(err);

        return response.status(200).json(data);
    });
}
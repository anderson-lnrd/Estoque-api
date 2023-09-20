import { db } from "../db.js";

export const getUsers = (_, response) => {
    const query = "SELECT * FROM user";

    db.query(query, (err, data) => {
        if(err) return response.json(err);

        return response.status(200).json(data);
    });
}
import { db } from "../db.js";

export const getProducts = (_, response) => {
    const query = "SELECT * FROM product";

    db.query(query, (err, data) => {
        if(err) return response.json(err);

        return response.status(200).json(data);
    });
}

export const postProduct = (req, res) => {
    const query =
      "INSERT INTO product(`product_id`, `name`, `sale_value`, `pucharse_value`, `quantity`, `description`) VALUES(?)";
  
    const values = [
      req.body.product_id,
      req.body.name,
      req.body.sale_value,
      req.body.pucharse_value,
      req.body.quantity,
      req.body.description,
    ];
  
    db.query(query, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Produto criado com sucesso.");
    });
  };

  export const putProduct = (req, res) => {
    const query =
      "UPDATE product SET `name` = ?, `sale_value` = ?, `pucharse_value` = ?, `quantity` = ?, `description` = ? WHERE `product_id` = ?";
  
    const values = [
        req.body.product_id,
        req.body.name,
        req.body.sale_value,
        req.body.pucharse_value,
        req.body.quantity,
        req.body.description,
    ];
  
    db.query(query, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Produto atualizado com sucesso.");
    });
  };

  export const deleteProduct = (req, res) => {
    const q = "DELETE FROM product WHERE `product_id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Produto deletado com sucesso.");
    });
  };
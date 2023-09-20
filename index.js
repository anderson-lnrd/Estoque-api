import express from "express";
import userRoutes from "./routes/users.js";
import clientRoutes from "./routes/clients.js";
import orderRoutes from "./routes/orders.js";
import orderItemRoutes from "./routes/order_items.js";
import productRoutes from "./routes/products.js";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);
app.use("/client", clientRoutes);
app.use("/order", orderRoutes);
app.use("/order_item", orderItemRoutes);
app.use("/product", productRoutes);

app.listen(8800);
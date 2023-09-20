import express from "express";
import { getClients } from "../controllers/client.js";

const router = express.Router();

router.get('/', getClients);

export default router
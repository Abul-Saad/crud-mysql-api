import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

import productRoutes from "./routes/product.routes.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 4000

app.get("/", (req, res)=>{
    res.send("APIs Is running...");
});

app.use("/api/products", productRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

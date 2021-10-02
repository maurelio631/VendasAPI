import express from "express";
import productsRoutes from "./Routes/products.routes.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/products', productsRoutes);

app.get('/', (req,res)=>res.send("You're into the root directory"))

app.listen(PORT, () =>
  console.log(`Server listening to the port: http://localhost:${PORT}`)
);

import express from "express";
import cors from "cors"
import productsRoutes from "./Routes/products.routes.js";

const app = express();
const PORT = 5000;


app.use(express.json({limit:"30mb"}));
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
//Rotas para os produtos 
app.use('/products', productsRoutes);
//Rota para a raíz
app.get('/', (req,res)=>res.send("You're into the root directory"))

app.listen(PORT, () =>
  console.log(`Server listening to the port: http://localhost:${PORT}`)
);

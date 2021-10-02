import express from "express";
import { userInfo } from "os";

const router = express.Router();

var products = [
  {
    id: 0,
    name: "Playstation 5",
    description: "Videogame console launched in 2020's fall",
    amount: 4,
    price: 300,
  },
  {
    id: 1,
    name: "Xbox Series X",
    description:
      "Videogame console launched in 2020's fall by the worlds greatest operative system manufacturer",
    amount: 3,
    price: 350,
  },
];

router.get("/", (req, res) => {
  console.log(products);
  res.send(products);
});

router.get("/:id", (req, res) => {
    const {id} = req.params;

    var foundProduct = products.find((product)=>product.id == id)
    res.send(foundProduct)
});

router.post("/", (req, res) => {
  var product = req.body;
  var Id = products.length;
  products.push({ id: Id, ...product });
  res.send(`Product ${product.name} successfully added`);
  console.log(products);
});

router.delete("/:id",(req,res)=>{
    const {id} = req.params;
    products = products.filter((product)=> product.id != id);
    res.send(`The product with id ${id} has been successfully deleted`);
})

export default router;

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

export const getProducts = (req, res) => {
  console.log(products);
  res.send(products);
};

export const getProduct = (req, res) => {
  const { id } = req.params;

  var foundProduct = products.find((product) => product.id == id);
  res.send(foundProduct);
};

export const createProduct = (req, res) => {
  var product = req.body;
  var Id = products.length;
  products.push({ id: Id, ...product });
  res.send(`Product ${product.name} successfully added`);
  console.log(products);
};

export const deleteProduct = (req, res) => {
  const { id } = req.params;
  products = products.filter((product) => product.id != id);
  res.send(`The product with id ${id} has been successfully deleted`);
};

export const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, description, amount, price } = req.body;

  var product = products.find((product) => product.id == id);

  if (name) {
    product.name = name;
  }
  if (description) {
    product.description = description;
  }
  if (amount) {
    product.amount = amount;
  }
  if (price) {
    product.price = price;
  }

  res.send(`${product.name} has been successfully updated`);
};

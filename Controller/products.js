import express from "express";
import { v4 as uuidv4 } from "uuid";

const product = {
  id = uuidv4(),
  name = "",
  description:"",
  price:"",
  ammount: 0
}

export const getProducts = async (req, res) => {
  try {
    const users = await product.find();
    console.log(products);
    res.status(200).json(products);
  } catch (err) {
    return res.status(404).send({ err: "Product not found" });
  }
};  

export const getProduct = (req, res) => {
  try {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
  } catch (error) {}
};

export const createProduct = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    return res.status(409).json({ error: "Registration failed" });
  }
};

export const deleteProduct = (req, res) => {
  try {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`The product has been successfully deleted`);
  } catch (error) {}
};

export const updateProduct = (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone, email, employeeType } = req.body;
    const user = users.find((user) => user.id == id);

    if (name) {
      user.name = name;
    }
    if (phone) {
      user.phone = phone;
    }
    if (email) {
      user.email = email;
    }
    if (employeeType) {
      user.employeeType = employeeType;
    }
    res.send("The product has been successfully updated");
  } catch (error) {}
};

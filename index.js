import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/products', (req, res)=>{
    console.log("Achieved the root directory!");
    res.send("Welcome to te root directory");
})

app.listen(PORT,()=>console.log(`Server running on port: http://localhost:${PORT}`));
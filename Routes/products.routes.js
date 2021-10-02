import express from "express";

const router = express.Router();

router.get('/', (req, res)=>{
    res.send("Routing directly from routes file");
})

export default router;
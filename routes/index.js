import express from "express";
import fishRouter from "./fish.routes";

const router = express.Router();

router.use("/species", fishRouter);

router.get("/test", (req, res) => {
    res.send("working");
});

export default router;
import express from "express";
import species from "../controller";

const fishRouter = express.Router();

fishRouter.get("/:id?", async (req, res, next) => {
    const { id } = req.params;

    let data;

    try{
        if(id){
            data = await species.findOne(id);
        }
        else{
            data = await species.findAll();
        }
        res.status(200);
        res.json(data);
    }
    catch(err){
        next(err);
    }
});

fishRouter.post("/", async (req, res, next) => {
    const newSpecies = req.body;

    try{
        const result = await species.addSpecies(newSpecies);

        res.status(200);
        res.json(result);
    }
    catch(err){
        next(err);
    }
})

fishRouter.put("/:id", async (req, res, next) => {
    const { id } = req.params;
    const updatedSpecies = req.body;

    try{
        const result = await species.updateSpecies(id, updatedSpecies);
        res.status(200);
        res.json(result);
    }
    catch(err){
        next(err);
    }
});

fishRouter.delete("/:id", async (req, res, next) => {
    const { id } = req.params;

    try{
        const result = await species.removeOne(id);
        res.status(200);
        res.json(result);
    }
    catch(err){
        next(err);
    }
})

export default fishRouter;
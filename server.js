import express from "express";
import config from "./config";
import router from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api",router);

app.use((err, req, res, next) => {
    console.error(err);
    res.json({name: err.name, msg: err.message});
});

app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}...`);
});
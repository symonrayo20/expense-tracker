import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import transactionRouter from "./backend/routes/transactionRoute.js";
import path from "path";
import { fileURLToPath } from 'url'

const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.use("/api", transactionRouter);

const getDirName = function (moduleUrl) {
    const filename = fileURLToPath(moduleUrl)
    return path.dirname(filename)
}

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_DB)
    .then(() => {
        console.log("Connected to the MONGO DB");
        app.listen(PORT, () => {
            console.log(`app is listening to port: ${PORT}`);
        })

        app.use(express.static(path.resolve(getDirName(import.meta.url), "frontend/dist")));
        app.get("*", (req, res) => {
            res.sendFile(path.resolve(getDirName(import.meta.url), "frontend/dist/index.html"));
        })
    })
    .catch((err) => {
        console.log(err.message);
    })

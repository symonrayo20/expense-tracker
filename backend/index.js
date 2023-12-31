import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import transactionRouter from "./routes/transactionRoute.js";

const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.use("/api", transactionRouter);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_DB)
    .then(() => {
        console.log("Connected to the MONGO DB");
        app.listen(PORT, () => {
            console.log(`app is listening to port: ${PORT}`);
        })
    })
    .catch((err) => {
        console.log(err.message);
    })

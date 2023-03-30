const { readdirSync } = require("fs");
const path = require("path");
const express = require("express");
const app = express();
require("dotenv").config();


const portfolioRoute = require("./portfolioRoute");
const mongoose = require("mongoose");

app.use(express.json());

readdirSync("./routes").map(r => app.use("/api/v1", require(`./routes/${r}`)))

const port = process.env.PORT || 5000;

mongoose
    .connect(process.env.DATABASE)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server Running on port ${port}`);
        });
    })
    .catch((err) => console.log(err));



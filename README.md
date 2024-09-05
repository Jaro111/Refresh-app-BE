require("dotenv").config();
const cors = require("cors");
const express = require("express");
const User = require("./users/model");
const History = require("./history/model");
const userRouter = require("./users/routes");
const commonRouter = require("./common/routes");
const historyRouter = require("./history/routes");
const port = process.env.PORT || 5001;

const app = express();
app.use(cors());

app.use(express.json());
app.use(userRouter, commonRouter);

app.use(historyRouter);

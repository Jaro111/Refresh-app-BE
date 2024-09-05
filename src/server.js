require("dotenv").config();
const cors = require("cors");
const express = require("express");
const pictureRouter = require("./common/routes");
const port = process.env.PORT || 5001;

const app = express();
app.use(cors());

app.use(express.json());
app.use(pictureRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get("/health", (req, res) => {
  res.status(200).json({ message: "API is healthy" });
});

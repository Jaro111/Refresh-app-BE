const { Router } = require("express");

const pictureRouter = Router();

const { getFolderImage, getOneImage } = require("./functions");

// userRouter.get("/users/getAll", getUsers);

// get images from folder
pictureRouter.post("/getImages", getFolderImage);

// get single image
pictureRouter.get("/getOneImage", getOneImage);

module.exports = pictureRouter;

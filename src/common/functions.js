const { response } = require("express");
const ImageKit = require("imagekit");

const imagekit = new ImageKit({
  publicKey: `${process.env.IMAGE_KIT_PUBLIC_KEY}`,
  privateKey: `${process.env.IMAGE_KIT_PRIVATE_KEY}`,
  urlEndpoint: `https://ik.imagekit.io/${process.env.IMAGE_KIT_ID}/`,
});

const getFolderImage = async (req, res) => {
  try {
    const myImages = await imagekit.listFiles({
      path: "nails_gallery",
      limit: req.body.limit,
      skip: req.body.skip,
    });
    //
    console.log(myImages);

    res.status(200).json({ message: "Succesfull Upload", myImages: myImages });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

const getOneImage = async (req, res) => {
  try {
    const myImages = await imagekit.listFiles({
      searchQuery: 'name="glow_logo.jpg"',
    });
    //
    console.log(myImages);

    res.status(200).json({ message: "Succesfull Upload", myImages: myImages });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

module.exports = { getFolderImage: getFolderImage, getOneImage: getOneImage };

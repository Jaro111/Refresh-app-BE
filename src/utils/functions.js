const unsplashId = process.env.UNSPLASH_ID;

const getUnsplashImage = async (req, res) => {
  try {
    const image = await fetch(
      `https://api.unsplash.com/photos/${req.body.id}?&client_id=${unsplashId}`,
      {
        mode: "cors",
      }
    );

    const response = await image.json();

    res.status(200).json({ message: "Succesfull Upload", image: response });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

module.exports = { getUnsplashImage: getUnsplashImage };

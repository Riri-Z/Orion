const { cloudinary } = require('../utils/cloudinary')
const fs = require('fs')

const uploadResponse = async (req, res, next) => {

  try {
    let base64 = 'data:image/png;base64,' + req.body.image;


    await cloudinary.uploader.upload(base64)
      .then(val => req.body = { ...req.body, imgURL: val.secure_url })
      .catch(e => console.log("Failed to upload"))



    next()
  } catch (e) {
    res.json(e)
  }

}
module.exports = uploadResponse;

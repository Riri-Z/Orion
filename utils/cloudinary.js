const cloudinary = require('cloudinary').v2;


cloudinary.config({ 
  cloud_name: 'dfmdylcj5', 
  api_key: '142288338753247', 
  api_secret: '0YEiFJmr9-W7BIt6XACXbb02feQ' 
});

module.exports = { cloudinary };
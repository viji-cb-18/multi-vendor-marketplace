const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const { param } = require("../routes/vendorRoutes");

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({

    cloudinary,
    params: {
        folder: "images",
        allowedFormats: ["jpg", "png", "jpeg"],
        transformation: [{ width: 500, height: 500, crop: "limit" }],

    }
});

const uploadMiddleware = multer({ storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});

module.exports ={cloudinary, uploadMiddleware};
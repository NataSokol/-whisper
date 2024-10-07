const multer = require("multer");
const path = require("path");
// const fs = require("fs");

// const dir = path.join(__dirname, "public", "img");
// if (!fs.existsSync(dir)) {
//   fs.mkdirSync(dir, { recursive: true }); // Создаем директорию, если не существует
// }

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/img')); // путь
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage }).single("image");

module.exports = upload;

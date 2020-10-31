const express = require("express");
const router = express.Router();
const excelController = require("../controllers/excel.controller");
const upload = require("../middlewares/upload");

let routes = (app) => {
  router.post("/upload", upload.single("file"), excelController.upload);
  router.get("/inovices", excelController.getInovices);
  router.get("/vendors", excelController.getVendors);

  app.use("/", router);
};

module.exports = routes;
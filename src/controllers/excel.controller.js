const db = require("../models");
const Inovice = db.inovices;
const Vendor =  db.vendors;

const XLSX = require("xlsx");

const upload = async (req, res) => {
    try {
      if (req.file == undefined) {
        return res.status(400).send("Please upload an excel file!");
      }
  
      let path =
        __basedir + "/resources/static/assets/uploads/" + req.file.filename;
      
      let wb = XLSX.readFile(path, {cellDates: true});
      let ws = wb.Sheets[wb.SheetNames[0]];
      let rows = XLSX.utils.sheet_to_json(ws, {header:1});
        // skip header
        console.log(rows);
        rows.shift();
  
        let inovices = [];
        let vendors = [];
  
        rows.forEach((row) => {
          let inovice = {
            inoviceNumber: row[0],
            docNumber: row[1],
            type: row[2],
            dueDate: row[3],
            docDate: row[4],
            pstngDate: row[5],
            amount: row[6],
            vendorCode: row[7]
          };
          let vendor = {
            vendorCode: row[7],
            vendorName: row[8],
            vendorType: row[9]
          };
          currentDate = new Date();
          if(inovice.docDate>currentDate || inovice.pstngDate>currentDate || inovice.dueDate<inovice.docDate) throw "Invalid Date";
  
          inovices.push(inovice);
          vendors.push(vendor);
        });
  
        Inovice.bulkCreate(inovices)
          .then(() => {
            res.status(200).send({
              message: "Uploaded the file successfully: " + req.file.originalname,
            });
          })
          .catch((error) => {
            res.status(500).send({
              message: "Fail to import data into database!",
              error: error.message,
            });
          });
          Vendor.bulkCreate(vendors, {updateOnDuplicate: ["vendorName","vendorType"]})
          .then(() => {
            res.status(200).send({
              message: "Uploaded the file successfully: " + req.file.originalname,
            });
          })
          .catch((error) => {
            res.status(500).send({
              message: "Fail to import data into database!",
              error: error.message,
            });
          });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Could not upload the file: " + req.file.originalname,
      });
    }
  };
  
  const getInovices = (req, res) => {
    Inovice.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving inovices.",
        });
      });
  };

  const getVendors = (req, res) => {
    Vendor.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving vendors.",
        });
      });
  };
  
  module.exports = {
    upload,
    getInovices,
    getVendors
  };
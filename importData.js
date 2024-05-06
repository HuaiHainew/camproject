const Sequelize = require("sequelize");
const db = require("./config/DBConfig");
const Drug = require("./models/ModelsDrug"); // Assuming your model is in the same directory

const XLSX = require("xlsx");
const path = require("path");

// Function to read Excel file and insert data into the cam table
async function importData() {
  const filePath = path.join(__dirname, "./data/cam_pk.xlsx");

  // Read Excel file
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  // Convert Excel data to JSON
  const jsonData = XLSX.utils.sheet_to_json(sheet);

  // Insert data into the cam table
  try {
    await db.sync(); // Sync the Sequelize model with the database

    // Check and insert new data
    for (const item of jsonData) {
      const exists = await Drug.findByPk(item.camid);
      if (!exists) {
        await Drug.create(item);
      }
    }

    console.log("Data imported successfully!");
  } catch (error) {
    console.error("Error importing data:", error);
  }
}

// Call the importData function
module.exports = importData;

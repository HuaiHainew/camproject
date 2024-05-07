const db = require("./config/DBConfig");
const Drug = require("./models/ModelsDrug");  // Make sure the path is correct and the model is defined correctly

const XLSX = require("xlsx");
const path = require("path");

async function importData() {
    const filePath = path.join(__dirname, "./data/cam_pk.xlsx");
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(sheet);

    try {
        await db.sync();
        for (const item of jsonData) {
            await Drug.findOrCreate({
                where: { camid: item.camid },
                defaults: item
            });
        }
        console.log("Data imported successfully!");
    } catch (error) {
        console.error("Error importing data:", error);
    }
}

module.exports = importData;

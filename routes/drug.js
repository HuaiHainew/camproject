const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const Drug = require("../models/ModelsDrug");

router.get("/listDrugs", async (req, res) => {
  try {
    // const uniqueCAIndications = await Drug.findAll({
    //   attributes: ['CAindication'],
    //   group: ['CAindication'],
    //   raw: true
    // });
    // console.log({ uniqueCAIndications })
    const uniqueCAIndications = [
      "Cancer Prevention",
      "Cancer Treatment",
      "Immunostimulat/Immunostimulation",
      "Immune System Related",
      "Immunomodulation",
      "Immunosuppression ",
      "N/A",
      "Inflammation",
      "Pain",
      "Chemotherapy Side Effects",
      "Fatigue",
      "Anorexia",
      "Alopecia",
      "Nausea & Vomiting",
      "Prostate Cancer",
    ].map((i) => ({ CAindication: i }));
    res.render("drug/listDrugs", { camUses: uniqueCAIndications });
  } catch (error) {
    console.error("Error fetching CA indications:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/listDrugsSelect", async (req, res) => {
  try {
    // const uniqueCAIndications = await Drug.findAll({
    //   attributes: ['CAindication'],
    //   group: ['CAindication'],
    //   raw: true
    // });
    // console.log({ uniqueCAIndications })
    const uniqueCAIndications = [
      "Cancer Prevention",
      "Cancer Treatment",
      "Immunostimulat/Immunostimulation",
      "Immune System Related",
      "Immunomodulation",
      "Immunosuppression ",
      "N/A",
      "Inflammation",
      "Pain",
      "Chemotherapy Side Effects",
      "Fatigue",
      "Anorexia",
      "Alopecia",
      "Nausea & Vomiting",
      "Prostate Cancer",
    ].map((i) => ({ CAindication: i }));
    res.render("drug/listDrugsSelect", { camUses: uniqueCAIndications });
  } catch (error) {
    console.error("Error fetching CA indications:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/listDrugsSearch", async (req, res) => {
  try {
    res.render("drug/listDrugsSearch");
  } catch (error) {
    console.error("Error fetching CA indications:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Endpoint for autocomplete search
router.get("/autocomplete", async (req, res) => {
  try {
    const { search, caInd } = req.query;

    // Define the conditions for querying based on search and CAInd
    const conditions = {};
    if (search) {
      conditions.cam = { [Sequelize.Op.like]: `%${search}%` };
    }
    if (caInd) {
      conditions.CAindication = caInd;
    }

    const drugs = await Drug.findAll({
      where: conditions,
    });

    res.json(drugs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

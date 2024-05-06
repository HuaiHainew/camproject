const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const title = "Video Jotter";
  // renders views/index.handlebars, passing title as an object
  res.render("index", { title: title });
});

router.get("/about", (req, res) => {
  const author = "NUS Department of Pharmacy and Pharmaceutical Sciences";
  res.render("about", { author });
});

router.get("/t&c", (req, res) => {
  const author = "NUS Department of Pharmacy and Pharmaceutical Sciences";
  res.render("t&c", { author });
});

module.exports = router;

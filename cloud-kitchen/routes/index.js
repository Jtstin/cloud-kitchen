var express = require("express");
var router = express.Router();
var getMenu = require("./menu");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api/menus/:menuId", function (req, res) {
  const menu = getMenu(req.params.menuId);
  if (menu === undefined) {
    res.status(404).send("Sorry menu not found");
    return;
  }
  res.send(menu);
});

module.exports = router;

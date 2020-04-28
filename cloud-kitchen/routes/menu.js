const fs = require("fs");

let getMenu = function (menuId) {
  let path = `${__dirname}/../data/menus/menu-${menuId}.json`;
  if (fs.existsSync(path)) {
    return fs.readFileSync(path).toString("utf-8");
  }
};

module.exports = getMenu;

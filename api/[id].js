const transform = require("../transform");
module.exports = async (req, res) => {
    let id = `${req.query.id}`.split(".")[0];
    res.json(await transform(id));
  }
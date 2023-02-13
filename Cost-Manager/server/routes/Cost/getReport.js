const router = require("express").Router();
const Cost = require("../../models/Cost");

//GET ALL COSTS
router.get("/", async (req, res) => {
    const username = req.query.user;
    const category = req.query.category;
    const year = req.query.year;
    const month = req.query.month;
    try {
      let costsObj;
      let costs = []
      costsObj = await Cost.find({
        username
      })
      for (let index = 0; index < costsObj.length; index++) {
        costs.push(costsObj[index])
      }
      if (category) {
        costs = costs.filter((cost) => cost._doc.category === category)
      }
      if (year) {
        costs = costs.filter((cost) => cost._doc.createdAt.toString().split(' ')[3] === year)
      }
      if (month) {
        costs = costs.filter((cost) => cost._doc.createdAt.toString().split(' ')[1] === month)
      }
      let sum = 0
      costs.forEach(element => {
  
        sum += (+element._doc.sum)
      });
          res.status(200).json({
          "costs": costs,
          "sum": sum
        }
      );
  
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
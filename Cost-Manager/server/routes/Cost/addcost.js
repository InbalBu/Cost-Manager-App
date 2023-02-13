const router = require("express").Router();
const Cost = require("../../models/Cost");

//CREATE COST
router.post("/", async (req, res) => {
    const newCost = new Cost(req.body);
    try {
      const savedCost = await newCost.save();
      res.status(200).json(savedCost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;

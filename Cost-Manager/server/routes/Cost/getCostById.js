const router = require("express").Router();
const Cost = require("../../models/Cost");
//GET COST
router.get("/:id", async (req, res) => {
    try {
      const cost = await Cost.findById(req.params.id);
      res.status(200).json(cost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;

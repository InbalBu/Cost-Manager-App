const router = require("express").Router();
const Cost = require("../../models/Cost");

//DELETE COST
router.delete("/:id", async (req, res) => {
    try {
      const cost = await Cost.findById(req.params.id);
      if (cost.username === req.body.username) {
        try {
          await cost.delete();
          res.status(200).json("cost has been deleted...");
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can delete only your COST!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;

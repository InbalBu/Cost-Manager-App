const router = require("express").Router();
const Cost = require("../../models/Cost");

//UPDATE COST
router.put("/:id", async (req, res) => {
    try {
      const cost = await Cost.findById(req.params.id);
      if (cost.username === req.body.username) {
        try {
          const updatedCost = await Cost.findByIdAndUpdate(
            req.params.id, {
              $set: req.body,
            }, {
              new: true
            }
          );
          res.status(200).json(updatedCost);
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can update only your cost!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;

const router = require("express").Router();
const db = require("../models");
const validate = require("validate.js");
const constraints = {
  amount: {
    numericality: {
      /* För cartRow */
      greaterThan: 0, // Du kan varken ha 0 produkter eller ett negativt antal.
    },
    type: {
      type: "integer",
    },
  },
};

router.post("/", (req, res) => {
  const cartRow = req.body;
  const invalidData = validate(cartRow, constraints);

  if (invalidData) {
    res.status(400).json(invalidData);
  } else {
    db.cartRow.create(cartRow).then((result) => {
      res.send(result);
    });
  }
});

router.put("/", (req, res) => {
  const cartRow = req.body;
  const invalidData = validate(cartRow, constraints);
  const cartRowId = cartRow.cartRowId;
  if (invalidData || !cartRowId) {
    res.status(400).json(invalidData || "ID required!");
  } else {
    db.cartRow
      .update(cartRow, {
        where: {
          cartRowId: cartRowId,
        },
      })
      .then((result) => {
        res.send(result);
      });
  }
});

router.delete("/", (req, res) => {
  db.cartRow
    .destroy({
      where: { cartRowId: req.body.cartRowId },
    })
    .then((result) => {
      res.json("Produkt has been removed from cartRow");
    });
});

router.get("/", (req, res) => {
  db.cartRow.findAll().then((result) => {
    res.send(result);
  });
});

module.exports = router;

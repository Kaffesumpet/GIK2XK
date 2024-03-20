const router = require("express").Router();
const ratingService = require("../services/ratingService");

router.post("/", (req, res) => {
  const rating = req.body;

  ratingService.create(rating).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.put("/", (req, res) => {
  const rating = req.body;
  const ratingId = rating.ratingId;

  ratingService.update(rating, ratingId).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.delete("/", (req, res) => {
  const ratingId = req.body.ratingId;

  ratingService.destroy(ratingId).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get("/", (req, res) => {
  ratingService.getAll().then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;

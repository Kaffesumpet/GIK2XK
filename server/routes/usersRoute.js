const router = require("express").Router();
const userService = require("../services/userService");

router.post("/", (req, res) => {
  const user = req.body;

  userService.create(user).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.put("/", (req, res) => {
  const user = req.body;
  const userId = user.userId;

  userService.update(user, userId).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.delete("/", (req, res) => {
  const userId = req.body.userId;

  userService.destroy(userId).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get("/:id", (req, res) => {
  const userId = req.params.id;

  userService.getById(userId).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get("/", (req, res) => {
  userService.getAll().then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get("/:id/getCart/", (req, res) => {
  const userId = req.params.id;

  userService.getCart(userId).then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;

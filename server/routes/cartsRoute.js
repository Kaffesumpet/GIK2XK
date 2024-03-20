const router = require("express").Router();
const cartService = require("../services/cartService");

router.post("/", (req, res) => {
  const cart = req.body;

  cartService.create(cart).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.put("/", (req, res) => {
  const cart = req.body;
  const cartId = user.cartId;

  cartService.update(cart, cartId).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.delete("/", (req, res) => {
  const cartId = req.body.cartId;

  cartService.destroy(cartId).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get("/:id", (req, res) => {
  const cartId = req.params.id;

  cartService.getById(cartId).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get("/", (req, res) => {
  cartService.getAll().then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;

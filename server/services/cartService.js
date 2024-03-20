const db = require("../models");
const validate = require("validate.js");
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage,
} = require("../helpers/responseHelper");
const constraints = {
  payed: {
    type: "boolean",
  },
};

async function create(cart) {
  const invalidData = validate(cart, constraints);

  if (invalidData) {
    return createResponseError(422, invalidData);
  } else {
    try {
      const newCart = await db.cart.create(cart);

      return createResponseSuccess(newCart);
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }
}

async function update(cart, cartId) {
  const invalidData = validate(cartId, constraints);

  if (!cartId) {
    return createResponseError(422, "Cart ID required!");
  }
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    const existingCart = await db.cart.findOne({ where: { cartId } });
    if (!existingCart) {
      return createResponseError(404, "Cart not found");
    }

    await db.cart.update(cart, {
      where: { cartId },
    });
    return createResponseMessage(200, "Cart has been sucessfully updated");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function destroy(cartId) {
  if (!cartId) {
    return createResponseError(422, "Cart ID required!");
  }
  try {
    await db.cart.destroy({
      where: { cartId },
    });
    return createResponseMessage(200, "Cart has been successfully removed");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function getById(cartId) {
  try {
    const cart = await db.cart.findOne({
      where: { cartId },
    });

    return createResponseSuccess(cart);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function getAll() {
  try {
    const allCarts = await db.cart.findAll();

    return createResponseSuccess(allCarts);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

module.exports = {
  create,
  update,
  destroy,
  getById,
  getAll,
};

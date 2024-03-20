const db = require("../models");
const validate = require("validate.js");
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage,
} = require("../helpers/responseHelper");
const constraints = {
  email: {
    length: {
      minimum: 4,
      maximum: 256,
      tooShort: "^Email needs to be atleast %{count} characters.",
      tooLong: "^Email can't be longer than %{count} characters.",
    },
    email: {
      message: "^Email is in the wrong format",
    }, // Känt fel är att servern kraschar när emailen inte är unique
  },
  first_name: {
    length: {
      minimum: 2,
      maximum: 50,
      tooShort: "^There is no names that short.",
      tooLong: "^No more than 50 letters may be used.",
    },
  },
  last_name: {
    length: {
      minimum: 2,
      maximum: 50,
      tooShort: "^There is no surnames that short.",
      tooLong: "^No more than 50 letters may be used.",
    },
  },
  password: {
    length: {
      minimum: 12,
      maximum: 128,
      tooShort: "^Password needs to atleast 12 characters long",
      tooLong: "^Password cannot be more than 128 characters long",
    },
  },
};

async function create(user) {
  console.log("UsersFound");
  const invalidData = validate(user, constraints);

  if (invalidData) {
    return createResponseError(422, invalidData);
  } else {
    try {
      const newUser = await db.user.create(user);

      return createResponseSuccess(newUser);
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }
}

async function update(user, userId) {
  const invalidData = validate(userId, constraints);

  if (!userId) {
    return createResponseError(422, "User ID required!");
  }
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    const existingUser = await db.user.findOne({ where: { userId } });
    if (!existingUser) {
      return createResponseError(404, "User not found");
    }

    await db.user.update(user, {
      where: { userId },
    });
    return createResponseMessage(200, "User has been sucessfully updated");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function destroy(userId) {
  if (!userId) {
    return createResponseError(422, "User ID required!");
  }
  try {
    await db.user.destroy({
      where: { userId },
    });
    return createResponseMessage(200, "User has been sucessfully removed");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function getById(userId) {
  try {
    const user = await db.user.findOne({
      where: { userId },
    });

    return createResponseSuccess(user);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function getAll() {
  try {
    const allUsers = await db.user.findAll();

    return createResponseSuccess(allUsers);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function getCart(userId) {
  try {
    const cart = await db.cart.findOne({
      where: { userId: userId, payed: false },
      order: [["createdAt", "DESC"]],
    });

    if (!cart) {
      return createResponseError(404, "No active cart exist for that user");
    }

    const cartRows = await db.cartRow.findAll({
      where: { cartId: cart.cartId },
      include: [{ model: db.product }],
    });

    const products = cartRows.map((row) => ({
      productId: row.productId,
      title: row.product.title,
      amount: row.amount,
      price: row.product.price * row.amount,
      imageUrl: row.product.imageUrl,
    }));

    const totalPrice = cartRows.reduce((total, row) => {
      return total + row.product.price * row.amount;
    }, 0);

    const _formatCart = {
      cartId: cart.cartId,
      products: products,
      totalPrice: totalPrice,
    };

    return createResponseSuccess(_formatCart);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

/** Lite osäker om jag ska bryta upp getCart i flera delar, då den gör väldigt mycket själv.
 *  Argumentet att behålla den är ju att den faktiskt formaterar Cart, även om det är mycket logik.
 */

module.exports = {
  create,
  update,
  destroy,
  getById,
  getAll,
  getCart,
};

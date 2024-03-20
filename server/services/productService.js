const db = require("../models");
const validate = require("validate.js");
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage,
} = require("../helpers/responseHelper");
const constraints = {
  title: {
    length: {
      minimum: 2,
      maximum: 100,
      tooShort: "^Title needs to be atleast %{count} characters long.",
      tooLong: "^Title can't be longer than %{count} characters.",
    },
  },
  imageUrl: {
    url: {
      message: "^Error with the image path",
    },
  },
};

async function create(product) {
  const invalidData = validate(product, constraints);

  if (invalidData) {
    return createResponseError(422, invalidData);
  } else {
    try {
      const newProduct = await db.product.create(product);
      return createResponseSuccess(newProduct);
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }
}

async function update(product, productId) {
  const invalidData = validate(product, constraints);

  if (!productId) {
    return createResponseError(422, "Product ID required");
  }
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    const existingProduct = await db.product.findOne({ where: { productId } });
    if (!existingProduct) {
      return createResponseError(404, "Product not found");
    }

    await db.product.update(product, {
      where: { productId },
    });
    return createResponseMessage(200, "Product has been successfully updated");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function destroy(productId) {
  if (!productId) {
    return createResponseError(422, "Product ID required!");
  }
  try {
    await Promise.all([
      db.rating.destroy({
        where: {
          product_product_id: productId,
        },
      }),
      db.product.destroy({
        where: {
          productId,
        },
      }),
    ]);

    return createResponseMessage(200, "Product has been sucessfully removed");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function getById(productId) {
  try {
    const product = await db.product.findOne({
      where: { productId },
    });

    const rating = await db.product.findByPk(productId, {
      include: "ratings",
    });

    return createResponseSuccess(_formatProduct(product, rating));
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function getAll() {
  try {
    const allProducts = await db.product.findAll();

    const productsWithRatings = await Promise.all(
      allProducts.map(async (product) => {
        const rating = await db.product.findByPk(product.productId, {
          include: "ratings",
        });
        return _formatProduct(product, rating);
      })
    );

    return createResponseSuccess(productsWithRatings);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function addToCart(productId, userId, amount) {
  try {
    const product = await db.product.findOne({
      where: {
        productId: productId,
      },
    });
    if (!product) {
      return createResponseError(422, "This is not available!");
    }

    let cart = await db.cart.findOne({
      where: {
        userId: userId,
        payed: false,
      },
      order: [["createdAt", "DESC"]],
    });

    if (!cart) {
      cart = await db.cart.create({
        userId: userId,
        payed: false,
      });
    }

    let existingCartRow = await db.cartRow.findOne({
      where: {
        cartId: cart.cartId,
        productId: productId,
      },
    });

    existingCartRow
      ? await existingCartRow.increment({ amount: 1 })
      : await db.cartRow.create({
          cartId: cart.cartId,
          productId,
          amount: 1,
        });

    return createResponseSuccess({
      message: "Product added to cart successfully!",
    });
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function removeFromCart(productId, userId, amount) {
  try {
    let cart = await db.cart.findOne({
      where: {
        userId: userId,
        payed: false,
      },
      order: [["createdAt", "DESC"]],
    });

    if (!cart) {
      return createResponseError(404, "No active cart exist for that user!");
    }

    let existingCartRow = await db.cartRow.findOne({
      where: {
        cartId: cart.cartId,
        productId: productId,
      },
    });

    if (!existingCartRow) {
      return createResponseError(404, "Product not found in cart.");
    }

    existingCartRow.amount > 1
      ? await existingCartRow.decrement({ amount: 1 })
      : await existingCartRow.destroy();

    return createResponseSuccess({
      message: "Product removed from cart successfully!",
    });
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

function _formatProduct(product, rating) {
  const cleanProduct = {
    productId: product.productId,
    title: product.title,
    description: product.description,
    price: product.price,
    imageUrl: product.imageUrl,
    ratings: rating ? rating.ratings.map((rating) => rating.rating) : [], // Om det finns en rating, så visas den upp, annars syns en tom array.
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
  };
  return cleanProduct;
}

module.exports = {
  create,
  update,
  destroy,
  getById,
  getAll,
  addToCart,
  removeFromCart,
};

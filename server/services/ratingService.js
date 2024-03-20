const db = require("../models");
const validate = require("validate.js");
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage,
} = require("../helpers/responseHelper");
const constraints = {
  rating: {
    numericality: {
      greaterThan: 0,
      lessThan: 6,
      notGreaterThan: "^Rating must be a number between 1-5.",
      notLessThan: "^Rating must be a number between 1-5.",
    },
  },
};

async function create(rating) {
  const invalidData = validate(rating, constraints);

  if (invalidData) {
    return createResponseError(422, invalidData);
  } else {
    try {
      const newRating = await db.rating.create(rating);
      return createResponseSuccess(newRating);
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }
}

async function update(rating, ratingId) {
  const invalidData = validate(ratingId, constraints);

  if (!ratingId) {
    return createResponseError(422, "rating ID required!");
  }
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    const existingrating = await db.rating.findOne({ where: { ratingId } });
    if (!existingrating) {
      return createResponseError(404, "rating not found");
    }

    await db.rating.update(rating, {
      where: { ratingId },
    });
    return createResponseMessage(200, "rating has been successfully updated");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function destroy(ratingId) {
  if (!ratingId) {
    return createResponseError(422, "Rating ID required!");
  }
  try {
    await db.rating.destroy({
      where: { ratingId },
    });
    return createResponseMessage(200, "Rating has been sucessfully removed");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function getAll() {
  try {
    const allRatings = await db.rating.findAll();

    return createResponseSuccess(allRatings);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

module.exports = {
  create,
  update,
  destroy,
  getAll,
};

const router = require("express").Router();
const db = require("../models");
const validate = require("validate.js");
const postService = require("../services/postService");

const constraints = {
  email: {
    length: {
      minimum: 4,
      maximum: 200,
      tooShort: "^E-postaddressen måste vara minst %{count} tecken lång.",
      tooLong: "^E-postaddressen får inte vara längre än %{count} tecken lång.",
    },
    email: {
      message: "^E-postaddressen är i ett felaktigt format.",
    },
  },
  username: {
    length: {
      minimum: 3,
      maximum: 50,
      tooShort: "^Användarnamnet måste vara minst %{count} tecken lång.",
      tooLong: "^Användarnamnet får inte vara längre än %{count} tecken lång.",
    },
  },
  imageUrl: {
    url: {
      message: "^Sökvägen är felaktigt.",
    },
  },
};

router.get("/:id/posts", (req, res) => {
  const id = req.params.id;

  postService.getByAuthor(id).then((result) => {
    res.status(result.status).json(result.data);
  })
});

router.get("/", (req, res) => {
  db.user.findAll().then((result) => {
    res.send(result);
  });
});

router.post("/", (req, res) => {
  const user = req.body;
  const invalidData = validate(req.body, constraints);
  if (invalidData) {
    res.status(400).json(invalidData);
  } else {
    db.user.create(req.body).then((result) => {
      res.send(result);
    });
  }
});

router.put("/", (req, res) => {
  const user = req.body;
  const invalidData = validate(req.body, constraints);
  const id = user.id;
  if (invalidData || !id) {
    res.status(400).json(invalidData || "Id är obligatoriskt");
  } else {
    db.user
      .update(user, {
        where: { id: user.id },
      })
      .then((result) => {
        res.send(result);
      });
  }
});

router.delete("/", (req, res) => {
  db.user
    .destroy({
      where: { id: req.body.id },
    })
    .then((result) => {
      res.json("inlägget raderades");
    });
});

module.exports = router;

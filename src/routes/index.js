const router = require("express").Router();
const { AuthController } = require("../controllers");

// router nanti disini
router.get("/", (req, res) => {
  res.json({ Message: "ok" });
});

/** Router Auth */
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);

/* Error handler middleware */
router.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

module.exports = router;

const router = require("express").Router();
const Multer = require("multer");
const multer = Multer();
const {
  AuthController,
  UserController,
  MenuController,
} = require("../controllers");
const { verifyToken } = require("../middlewares/verifiyToken.js");

router.get("/", (req, res) => {
  res.json({ Message: "ok" });
});

/** Router Auth */
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);

/** Router User */
router.get("/user/:id", UserController.getUserById);
router.get("/user/:id/history", UserController.getUserHistory);
router.get("/user/:id/favorite", UserController.getUserFavorite);

/** Router User (Protected) */
router.get("/user", verifyToken, UserController.getCurrentUser);
router.get("/user/history", verifyToken, UserController.getCurrentUserHistory);
router.get(
  "/user/favorite",
  verifyToken,
  UserController.getCurrentUserFavorite
);
router.get("/users", verifyToken, UserController.getAllUsers);
router.delete("/user/:id", verifyToken, UserController.deleteUser);
router.put("/user/:id", verifyToken, UserController.updateUser);

/** Router Menu */
router.get("/menu", MenuController.getAllMenu);
router.get("/menu/:id", MenuController.getMenuById);
router.post(
  "/menu",
  verifyToken,
  multer.single("image"),
  MenuController.createMenu
);
router.put(
  "/menu/:id",
  verifyToken,
  multer.single("image"),
  MenuController.updateMenu
);
router.delete("/menu/:id", verifyToken, MenuController.deleteMenu);

/* Error handler middleware */
// incase we forgot to impelement error handler in our controller/services
router.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

module.exports = router;

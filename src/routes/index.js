const router = require("express").Router();
const Multer = require("multer");
const multer = Multer();
const {
  AuthController,
  UserController,
  MenuController,
  BlogController,
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
router.get("/users", UserController.getAllUsers);
router.get("/users/:id", UserController.getUserById);
router.get("/users/:id/history", UserController.getUserHistory);
router.get("/users/:id/favorite", UserController.getUserFavorite);
router.delete("/users/:id", verifyToken, UserController.deleteUser);
router.put("/users/:id", verifyToken, UserController.updateUser);

/** Router Current User */
router.get("/user", verifyToken, UserController.getCurrentUser);
router.get("/user/history", verifyToken, UserController.getCurrentUserHistory);
router.get(
  "/user/favorite",
  verifyToken,
  UserController.getCurrentUserFavorite
);

/** Router Menu */
router.get("/menus", MenuController.getAllMenu);
router.get("/menus/:id", MenuController.getMenuById);
router.post(
  "/menus",
  verifyToken,
  multer.single("image"),
  MenuController.createMenu
);
router.put(
  "/menus/:id",
  verifyToken,
  multer.single("image"),
  MenuController.updateMenu
);
router.delete("/menus/:id", verifyToken, MenuController.deleteMenu);

/** Router Blog */
router.get("/blogs", BlogController.getAllBlogs);
router.get("/blogs/:id", BlogController.getBlogById);
router.post(
  "/blogs",
  verifyToken,
  multer.single("image"),
  BlogController.createBlog
);
router.put(
  "/blogs/:id",
  verifyToken,
  multer.single("image"),
  BlogController.updateBlog
);
router.delete("/blogs/:id", verifyToken, BlogController.deleteBlog);

/* Error handler middleware */
// incase we forgot to impelement error handler in our controller/services
router.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

module.exports = router;

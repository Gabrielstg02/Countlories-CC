const router = require("express").Router();
const Multer = require("multer");
const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // Maximum file size is 10MB
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = ["image/jpeg", "image/png", "image/jpg"];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error(
          "Invalid file type. Only JPEG, PNG and JPG image files are allowed."
        ),
        false
      );
    }
  },
});
const {
  AuthController,
  UserController,
  MenuController,
  BlogController,
  ForumController,
  PredictController,
} = require("../controllers");
const {
  verifyToken,
  verifyAdminToken,
} = require("../middlewares/verifiyToken.js");

router.use(multer.any());

router.get("/", (req, res) => {
  res.json({ Message: "ok" });
});

/** Router Auth */
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);
router.post("/refresh-token", AuthController.refreshToken);

/** Router Auth Admin */
router.post("/admin/login", AuthController.loginAdmin);
router.post("/admin/logout", AuthController.logoutAdmin);
router.post("/admin/refresh-token", AuthController.refreshTokenAdmin);

/** Router User */
router.get("/users", UserController.getAllUsers);
router.get("/users/:id", UserController.getUserById);
router.get("/users/:id/history", UserController.getUserHistory);
router.delete("/users/history/:id", UserController.deleteUserHistory);
router.get("/users/:id/favorite", UserController.getUserFavorite);
router.delete("/users/favorite/:id", UserController.deleteUserFavorite);
router.delete("/users/:id", verifyToken, UserController.deleteUser);
router.put("/users/:id", verifyToken, UserController.updateUser);

/** Router Current User */
router.get("/user", verifyToken, UserController.getCurrentUser);
router.get("/user/history", verifyToken, UserController.getCurrentUserHistory);
router.post(
  "/user/history",
  verifyToken,
  UserController.createCurrentUserHistory
);
router.get(
  "/user/favorite",
  verifyToken,
  UserController.getCurrentUserFavorite
);
router.post(
  "/user/favorite",
  verifyToken,
  UserController.createCurrentUserFavorite
);

/** Router Menu */
router.get("/menus", MenuController.getAllMenu);
router.get("/menus/:id", MenuController.getMenuById);
router.post("/menus", verifyAdminToken, MenuController.createMenu);
router.put("/menus/:id", verifyAdminToken, MenuController.updateMenu);
router.delete("/menus/:id", verifyAdminToken, MenuController.deleteMenu);

/** Router Blog */
router.get("/blogs", BlogController.getAllBlogs);
router.get("/blogs/:id", BlogController.getBlogById);
router.post("/blogs", verifyAdminToken, BlogController.createBlog);
router.put("/blogs/:id", verifyAdminToken, BlogController.updateBlog);
router.delete("/blogs/:id", verifyAdminToken, BlogController.deleteBlog);

/** Router Forum */
router.get("/forums", ForumController.getAllForums);
router.get("/forums/my", verifyToken, ForumController.getCurrentUserForums);
router.get("/forums/:id", ForumController.getForumById);
router.get("/forums/user/:id", ForumController.getForumsByUserId);
router.post("/forums", verifyToken, ForumController.createForum);
router.put("/forums/:id", verifyToken, ForumController.updateForum);
router.delete("/forums/:id", verifyToken, ForumController.deleteForum);

/** Router Forum Comment */
router.post(
  "/forums/:id/comments",
  verifyToken,
  ForumController.createForumComment
);
router.put(
  "/forums/comments/:id",
  verifyToken,
  ForumController.updateForumComment
);
router.delete(
  "/forums/comments/:id",
  verifyToken,
  ForumController.deleteForumComment
);

/** Router Predict */
router.post("/predict", PredictController.predict);

/* Error handler middleware */
// incase we forgot to impelement error handler in our controller/services
router.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  return res.status(statusCode).json({
    status: "error",
    code: 500,
    message: err.message,
  });
});

router.all("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Endpoint not found",
  });
});

module.exports = router;

var express = require("express");
const { usersController } = require("../Controller/UsersController");
const { checkBody } = require("../middlewares/checkBody");
var router = express.Router();

router.get("/users", usersController.getUsers);
router.get("/users/:id", usersController.getOneUser);
router.post("/users", checkBody, usersController.postUser);
router.put("/users/:id", checkBody, usersController.putUser);
router.patch("/users/:id", usersController.patchUser);
router.delete("/users/:id", usersController.deleteUser);
router.post("/login", usersController.loginCheck);
module.exports = router;

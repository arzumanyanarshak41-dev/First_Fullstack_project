var express = require("express");
const { todoController } = require("../Controller/TodoController");
var router = express.Router();

router.get("/todos", todoController.getUsers);
router.get("/todos/:id", todoController.getOneUser);
router.post("/todos", todoController.postUser);
router.put("/todos/:id", todoController.putUser);
router.patch("/todos/:id", todoController.patchUser);
router.delete("/todos/:id", todoController.deleteUser);

module.exports = router;

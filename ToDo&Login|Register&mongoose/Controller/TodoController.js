class TodoController {
  constructor(model) {
    this.model = model;
  }
  async getUsers(req, res) {
    try {
      const users = await req.app.locals.services.todo.getUsers(req.query);
      res.status(200).json(users);
    } catch (err) {
      res.status(400).json(err);
    }
  }
  async getOneUser(req, res) {
    try {
      const user = await req.app.locals.services.todo.getOneUser(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  }
  async postUser(req, res) {
    const user = await req.app.locals.services.todo.postUser(req.body);
    if (user.length != 0) {
      res.status(200).json(user);
    } else {
      res.status(400).json({ message: "Cannot post User" });
    }
  }
  async putUser(req, res) {
    try {
      const user = await req.app.locals.services.todo.putUser(
        req.params.id,
        req.body,
      );

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({
        message: err.message,
      });
    }
  }
  async patchUser(req, res) {
    try {
      const user = await req.app.locals.services.todo.patchUser(
        req.params.id,
        req.body,
      );
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({
        message: err.message,
      });
    }
  }
  async deleteUser(req, res) {
    try {
      const user = await req.app.locals.services.todo.deleteUser(req.params.id);
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({
        message: err.message,
      });
    }
  }
}
module.exports.todoController = new TodoController();

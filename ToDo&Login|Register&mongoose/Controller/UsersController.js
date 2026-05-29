class UsersController {
  async getUsers(req, res) {
    try {
      const users = await req.app.locals.services.users.getUsers();
      res.status(200).json(users);
    } catch (err) {
      res.status(400).json(err);
    }
  }
  async getOneUser(req, res) {
    try {
      const user = await req.app.locals.services.users.getOneUser(
        req.params.id,
      );
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  }
  async postUser(req, res) {
    const user = await req.app.locals.services.users.postUser(req.body);
    if (user.length != 0) {
      res.status(200).json(user);
    } else {
      res.status(400).json({ message: "Cannot post User" });
    }
  }
  async putUser(req, res) {
    try {
      const user = await req.app.locals.services.users.putUser(
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
      const user = await req.app.locals.services.users.patchUser(
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
      const user = await req.app.locals.services.users.deleteUser(
        req.params.id,
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
  async loginCheck(req, res) {
    try {
      const user = await req.app.locals.services.users.loginCheck(
        req.body.password,
        req.body.email,
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
}
module.exports.usersController = new UsersController();

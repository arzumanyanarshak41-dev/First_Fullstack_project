const { ObjectId } = require("mongodb");

class TodoService {
  constructor(model) {
    this.model = model;
  }
  async getUsers(query) {
    if (query.length != 0) {
      const UserId = query.userId;
      try {
        const todo = await this.model.find({ userId: new ObjectId(UserId) });
        console.log(todo);
        return todo;
      } catch {
        return null;
      }
    }
    const users = await this.model.find();
    console.log(users);
    return users;
  }
  async getOneUser(id) {
    const user = await this.model.findById(id);
    return user;
  }
  async postUser(body) {
    try {
      if (!body.text || !body.text.trim()) {
        return null;
      }
      const doc = await this.model(body);
      const user = await doc.save();
      return user;
    } catch {
      return null;
    }
  }
  async putUser(id, body) {
    const user = await this.model.findOneAndReplace(
      { _id: new ObjectId(id) },
      body,
      {
        runValidators: true,
        new: true,
      },
    );
    return user;
  }
  async patchUser(id, body) {
    const user = await this.model.findByIdAndUpdate(id, body, {
      runValidators: true,
      new: true,
    });
    return user;
  }
  async deleteUser(id) {
    const user = await this.model.findByIdAndDelete(id);
    console.log(user);
    return user;
  }
}
module.exports = TodoService;

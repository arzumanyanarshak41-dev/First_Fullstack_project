const { ObjectId } = require("mongodb");
const bcrypt = require("bcryptjs");
class UsersService {
  constructor(model) {
    this.model = model;
  }
  async getUsers() {
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
  async loginCheck(pass, email) {
    const user = await this.model.findOne({ email: email });
    if (!user) {
      return null;
    }
    const isMatch = await bcrypt.compare(pass, user.password);
    if (isMatch) {
      return user;
    } else {
      return null;
    }
  }
}
module.exports = UsersService;

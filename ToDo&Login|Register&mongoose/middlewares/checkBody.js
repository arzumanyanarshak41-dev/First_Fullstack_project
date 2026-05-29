const { usersSchema } = require("../schema/usersSchema");

async function checkBody(req, res, next) {
  try {
    const newBody = await usersSchema.validateAsync(req.body);
    req.body = newBody;
    next()
  } catch (error) {
    return res.status(400).json(error);
  }
}
module.exports.checkBody = checkBody;

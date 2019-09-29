const Users = require('../model/users.model');
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

module.exports.getCreate = function (req, res) {
  res.render('../views/users/create', {

  })
}
module.exports.postCreate = async function (req, res) {
  await Users.insertMany(req.body);
  res.redirect('/users');
}
module.exports.index = async function (req, res) {
  const users = await Users.find();
  res.render('../views/users/index', {
    users: users
  });
}
module.exports.getUpdate = function (req, res) {
  Users.findById(req.params.userId, (err, res) => {
    return res._doc;
  }).then((result) => {
    res.render('../views/users/update', { user: result._doc, id: result._id });
  }
  )
}

module.exports.postUpdate = function (req, res) {
  const user = req.body;
  Users.findOneAndUpdate(user.id, { name: user.name, email: user.email, phone: user.phone }).then(() => {
    res.redirect('/users');
  })
}

module.exports.getDelete = function (req, res) {
  Users.findByIdAndDelete(req.params.userId).then((respone) => {
    res.redirect('/users');
  })
}

module.exports.getDetail = function (req, res) {
  Users
    .findById(req.params.userId)
    .then((response) => {
      res.render('../views/users/detail', {
        user: response._doc
      })
    })

}
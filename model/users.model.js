const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Userchema = new Schema({
  name: String,
  phone: Number,
  email: String,
  password: String
})

const Users = mongoose.model('Users', Userchema, 'users')

module.exports = Users;
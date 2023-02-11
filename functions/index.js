const functions = require('firebase-functions');
const auth = require('./auth');

exports.createUsers = auth.createUsers;
exports.loginUsers = auth.loginUsers;
exports.deleteUsers = auth.deleteUsers;
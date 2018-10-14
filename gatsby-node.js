require('dotenv').config({ path: '.env' });

exports.createPages = require('./gatsby/onCreatePage');
exports.onCreateNode = require('./gatsby/onCreateNode');
exports.sourceNodes = require('./gatsby/sourceNodes');

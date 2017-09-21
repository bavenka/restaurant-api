const bcrypt = require('bcrypt');

export default (password, saltRounds) => bcrypt.hash(password, saltRounds = 10);
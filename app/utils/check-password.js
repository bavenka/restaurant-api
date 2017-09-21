const bcrypt = require('bcrypt');

export default (password, hashedPassword) => bcrypt.compare(password, hashedPassword);
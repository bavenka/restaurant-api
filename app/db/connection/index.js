import url from '../url/index';

const { Pool } = require('pg');
const pool = new Pool({
    connectionString: url
});
export default pool;

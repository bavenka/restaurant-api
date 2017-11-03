import { Pool } from 'pg';

import url from '../url';

const pool = new Pool({
    connectionString: url
});
export default pool;

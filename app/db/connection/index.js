import {Pool} from 'pg';

import url from '../url';

import {tablesInit} from '../../db/init/tables';

const pool = new Pool({
    connectionString: url
});

const connect = async () => {
    try {
        const client = await pool.connect();
        const data = await client.query(tablesInit);
        console.log(data);
        await client.release()
    } catch (e) {
        console.error('error connecting', e.stack);
    }
    await pool.end();
};

// connect();


export default pool;

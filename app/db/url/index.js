import  config  from '../../config';

const {username, password, host, port, database } = config.postgres;

const url = `postgresql:${username}:${password}@${host}:${port}/${database}`;

export default url;
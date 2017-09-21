import  config  from '../config/index';

const url = `postgresql:${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`;

export default url;
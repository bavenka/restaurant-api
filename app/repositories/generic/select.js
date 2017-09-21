export default (body, tableName, queryName) => {

    const queryValues = Object.keys(body).map(key => {
        return body[key];
    });
    const bodyKeysCount = Object.keys(body).length;

    const queryKeysAndArguments = Object.keys(body).map((key, index) => {
       return `${ key } = $${ index + 1 }`
    });

    const keysAndArguments = (bodyKeysCount === 1)
        ? queryKeysAndArguments[0]
        : queryKeysAndArguments.split(' AND ');

    const queryText = `SELECT * FROM ${ tableName } WHERE ${ keysAndArguments }`;

    return {
        name: queryName,
        text: queryText,
        values: queryValues,
    };
};
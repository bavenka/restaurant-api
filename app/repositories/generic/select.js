export default (value, tableName, queryName) => {

    let queryArgumentsKeys = [];

    let queryValues = [];

    let queryText = `SELECT * FROM "${ tableName }" WHERE `;

    const keys = Object.keys(value);


    if(keys.length === 1) {
        queryText = queryText + `"${keys[0]}" = $1`;
        queryValues.push(value[keys[0]]);
    } else {
        queryValues = keys.map((key, index) => {
            queryArgumentsKeys.push(`"${key}" = $${index + 1}`);
            return `${value[key]}`;
        });
        queryText = queryText + `${queryArgumentsKeys.join(' AND ')}`;
    }

    return {
        name: queryName,
        text: queryText,
        values: queryValues,
    };
};

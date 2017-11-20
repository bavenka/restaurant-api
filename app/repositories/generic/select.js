export default (value, tableName, queryName) => {

    const key = Object.keys(value)[0];
    const queryText = `SELECT * FROM "${ tableName }" WHERE "${key}" = $1`;

    return {
        name: queryName,
        text: queryText,
        values: [value[key]],
    };
};

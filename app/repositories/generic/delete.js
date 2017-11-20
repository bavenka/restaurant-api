export default (value, tableName) => {

    const key = Object.keys(value)[0];
    const queryText = `DELETE FROM "${ tableName }" WHERE "${key}" = $1`;

    return {
        text: queryText,
        values: [value[key]],
    };
};

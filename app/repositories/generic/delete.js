export default (param, tableName) => {

    const key = Object.keys(param)[0];
    const queryText = `DELETE FROM "${ tableName }" WHERE "${key}" = $1`;

    return {
        text: queryText,
        values: [param[key]],
    };
};
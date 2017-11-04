export default (param, tableName, queryName) => {

    const key = Object.keys(param)[0];
    const queryText = `DELETE FROM ${ tableName } WHERE ${key} = $1`;

    return {
        name: queryName,
        text: queryText,
        values: param[key].split(" "),
    };
};
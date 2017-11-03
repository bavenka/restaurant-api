export default (param, tableName, queryName) => {

    const queryText = `SELECT * FROM ${ tableName } WHERE ${param} = $1`;

    return {
        name: queryName,
        text: queryText,
        values: [param],
    };
};
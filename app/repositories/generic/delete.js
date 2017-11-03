export default (param, tableName, queryName) => {

    const queryText = `DELETE FROM ${ tableName } WHERE ${param} = $1`;

    return {
        name: queryName,
        text: queryText,
        values: [param]
    };
};
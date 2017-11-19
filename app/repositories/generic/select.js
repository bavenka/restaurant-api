export default (id, tableName, queryName) => {

    const queryText = `SELECT * FROM "${ tableName }" WHERE "id" = ${id}`;

    return {
        name: queryName,
        text: queryText,
    };
};
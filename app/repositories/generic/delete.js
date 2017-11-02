export default (id, tableName, queryName) => {

    const queryText = `DELETE FROM ${ tableName } WHERE ID = ${id}`;

    return {
        name: queryName,
        text: queryText,
    };
};
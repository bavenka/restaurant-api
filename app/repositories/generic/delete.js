export default (id, tableName) => {

    const queryText = `DELETE FROM "${ tableName }" WHERE "id" = ${id}`;

    return {
        text: queryText,
    };
};
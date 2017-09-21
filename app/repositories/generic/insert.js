export default (body, tableName, queryName) => {

    let queryArguments = [];

    const queryValues = Object.keys(body).map((key, index) => {
        queryArguments.push(`$${index + 1}`);
        return body[key];
    });
    const queryKeys = Object.keys(body);

    const queryText = `INSERT INTO ${tableName}(${queryKeys.toString()}) VALUES(${queryArguments.toString()}) RETURNING *`;

    return {
        name: queryName,
        text: queryText,
        values: queryValues,
    };
};
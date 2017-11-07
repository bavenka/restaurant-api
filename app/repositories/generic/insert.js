export default (body, tableName) => {

    let queryArguments = [];
    let queryKeys = [];

    const queryValues = Object.keys(body).map((key, index) => {
        queryKeys.push(`"${key}"`);
        queryArguments.push(`$${index + 1}`);
        return `${body[key]}`;
    });

    const queryText = `INSERT INTO "${tableName}" (${queryKeys.toString()}) VALUES(${queryArguments.toString()}) RETURNING *`;

    return {
        text: queryText,
        values: queryValues,
    };
};
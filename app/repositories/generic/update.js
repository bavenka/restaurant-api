export default (body, id, tableName) => {

    let queryArgumentsKeys = [];

    const queryValues = Object.keys(body).map((key, index) => {
        queryArgumentsKeys.push(`"${key}" = $${index + 1}`);
        return `${body[key]}`;
    });

    const queryText = `UPDATE "${tableName}" SET ${queryArgumentsKeys.toString()} WHERE "id" = ${id} RETURNING *`;

    return {
        text: queryText,
        values: queryValues,
    };
};
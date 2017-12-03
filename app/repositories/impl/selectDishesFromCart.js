export default (value, queryName) => {

    const key = Object.keys(value)[0];
    let queryText = `SELECT * FROM cart c LEFT JOIN dish d ON c.dish_id = d.id WHERE c.user_id = $1`;

    return {
        name: queryName,
        text: queryText,
        values: [value[key]],
    };
};
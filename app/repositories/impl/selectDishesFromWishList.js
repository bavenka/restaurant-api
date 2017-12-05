export default (value, queryName) => {

    const key = Object.keys(value)[0];
    let queryText = `SELECT * FROM wish_list w LEFT JOIN dish d ON w.dish_id = d.id WHERE w.user_id = $1`;

    return {
        name: queryName,
        text: queryText,
        values: [value[key]],
    };
};
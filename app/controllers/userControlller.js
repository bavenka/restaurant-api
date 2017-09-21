import * as userService from '../services/userService';

export const saveUser = (req, res, next) => {
    userService
        .saveUser(req.body)
        .then(data => res.status(201).json(data.rows[0]))
        .catch(e => next(e))
};
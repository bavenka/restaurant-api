import * as userService from '../services/userService';

export const saveUser = (req, res, next) => {
    userService
        .saveUser(req.body)
        .then(data => res.status(201).json(data.rows[0]))
        .catch(e => next(e))
};

export const login = (req, res, next) => {
  userService
      .login(req.body.email, req.body.password)
      .then(data => res.status(200).json({"token" : data}))
      .catch(e => next(e))
};
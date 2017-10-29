import * as userService from '../services/userService';

export const saveUser = (req, res, next) => {
    userService
        .saveUser(req.body)
        .then(data => res.status(201).json({"token" : data}))
        .catch(e => next(e))
};

export const authenticate = (req, res, next) => {
  userService
      .authenticate(req.body.email, req.body.password)
      .then(data => res.status(200).json({"token" : data}))
      .catch(e => next(e))
};
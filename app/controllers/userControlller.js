import * as userService from '../services/userService';
import * as jwtService from '../services/jwtService';

export const registerUser = (req, res, next) => {
    userService
        .registerUser(req.body)
        .then(data => res.status(201).json({"token": data}))
        .catch(e => next(e))
};

export const authenticate = (req, res, next) => {
    userService
        .authenticate(req.body.email, req.body.password)
        .then(data => res.status(200).json({"token": data}))
        .catch(e => next(e))
};

export const authenticateByGoogle = (req, res) => {
        const token = jwtService.createToken(req.user);
        res.status(200).json({token});
};


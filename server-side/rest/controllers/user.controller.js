import sequelize from '../../models';

const User = sequelize.models.User;

/**
 * Load user and append to req.
 */
function load(req, res, next, id) {
    User.findById(id)
        .then((user) => {
            req.user = user; // eslint-disable-line no-param-reassign
            return next();
        })
        .catch(e => next(e));
}

/**
 * Get user list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
function list(req, res, next) {
    User.findAll()
        .then(users => res.json(users))
        .catch(e => next(e));
}

/**
 * Get user
 * @returns {User}
 */
function get(req, res) {
    return res.json(req.user);
}

function signin(req, res, next) {
    //check validations
    next();
}

function signup(req, res) {
    //check validations
    User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    })
    res.json({
        message: 'success'
    });
    return;
}

function logout(req, res) {
    req.logout();
    res.json({
        message: 'success'
    });
}

export default {
    load,
    get,
    list,
    signin,
    signup,
    logout
};
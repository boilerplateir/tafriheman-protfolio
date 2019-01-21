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

    var email = req.body.email;
    var password = req.body.password;

    req.checkBody('email', 'The email field is required').notEmpty();
    req.checkBody('password', 'The password field is required').notEmpty();

    var errors = req.validationErrors();
    if (errors) {
        res.status(400).json(errors);
        return;
    }
    console.log("next");
    next();
}

function signup(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var password_confirmation = req.body.password_confirmation;

    req.checkBody('name', 'The Name field is required').notEmpty();
    req.checkBody('email', 'The email field is required').notEmpty();
    req.checkBody('email', 'The email must be a valid email adress').isEmail();
    req.checkBody('password', 'The password field is required').notEmpty();
    req.checkBody('password_confirmation', 'The Confirm Password field is required').notEmpty();
    req.checkBody('password_confirmation', 'Password do not match').equals(password);

    var errors = req.validationErrors();
    if (errors) {
        res.status(400).json(errors);
        return;
    }

    console.log('register code');
    res.send('register');
    return;
}

export default {
    load,
    get,
    list,
    signin,
    signup
};
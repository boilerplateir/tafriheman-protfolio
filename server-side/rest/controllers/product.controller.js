import sequelize from '../../models';

const Product = sequelize.models.Product;

/**
 * Load product and append to req.
 */
function load(req, res, next, id) {
    Product.findById(id)
        .then((product) => {
            req.product = product; // eslint-disable-line no-param-reassign
            return next();
        })
        .catch(e => next(e));
}

/**
 * Get product list.
 * @property {number} req.query.skip - Number of products to be skipped.
 * @property {number} req.query.limit - Limit number of products to be returned.
 * @returns {Product[]}
 */
function list(req, res, next) {
    Product.findAll()
        .then(products => res.json(products))
        .catch(e => next(e));
}

/**
 * Get product
 * @returns {Product}
 */
function get(req, res) {
    return res.json(req.product);
}

export default {
    load,
    get,
    list
};
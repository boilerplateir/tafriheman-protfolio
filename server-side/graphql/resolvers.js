import sequelize from '../models';

export default function resolvers() {
    const models = sequelize.models;

    return {
        RootQuery: {
            user(root, {
                id
            }, context) {
                return models.User.findById(id, context);
            },
            users(root, args, context) {
                return models.User.findAll({}, context);
            },
            product(root, {
                id
            }, context) {
                return models.Product.findById(id, context);
            },
            products(root, args, context) {
                return models.Product.findAll({}, context);
            }
        },
        User: {

        },
        Product: {

        },
        RootMutation: {},
    };
}
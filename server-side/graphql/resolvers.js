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
            }
        },
        User: {

        },
        RootMutation: {
            signup(obj1, obj2, obj3, obj4) {
                console.log('obj1 :', obj1);
                console.log('obj2 :', obj2);
                console.log('obj3 :', obj3);
                console.log('obj4 :', obj4);
                return "from signup";
            },
            signin(obj1, obj2, obj3, obj4) {
                console.log('obj1 :', obj1);
                console.log('obj2 :', obj2);
                console.log('obj3 :', obj3);
                console.log('obj4 :', obj4);
                return "from signin";
            },

        },
    };
}
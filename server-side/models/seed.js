export default function (sequelize) {
    const models = sequelize.models;
    models.User.create({
            firstname: 'abbas',
            lastname: 'ghoroone',
            email: 'abbas.ghoroone@example.com',
            password: null
        })
        .then(() => models.User.create({
            firstname: 'ali',
            lastname: 'daei',
            email: 'ali.daei@example.com',
            password: null
        }));
}
export default function (sequelize) {
    const models = sequelize.models;
    models.User.create({
            firstname: 'abbas',
            lastname: 'ghoroone',
            email: 'admin@gmail.com',
            password: "123456"
        })
        .then(() => models.User.create({
            firstname: 'ali',
            lastname: 'daei',
            email: 'super@gmail.com',
            password: "123456"
        }));
}
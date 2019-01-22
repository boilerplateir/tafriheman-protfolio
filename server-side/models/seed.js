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
    models.Product.create({
            title: 'pro 1',
            desc: 'desc 1',
            price: '110.02 $'
        })
        .then(() => models.Product.create({
            title: 'pro 2',
            desc: 'desc 2',
            price: '130.92 $'
        }));
}
import Sequelize from 'sequelize';

export default function (sequelize) {
    const Product = sequelize.define('Product', {
        title: Sequelize.STRING,
        desc: Sequelize.STRING,
        price: Sequelize.STRING        
    }, {
        createdAt: "createdAt",
        updatedAt: false
    });
}
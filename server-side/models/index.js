import Sequelize from 'sequelize';

import User from './user.model';
import seed from './seed'; // eslint-disable-line

const sequelize = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  storage: './../db.sqlite',
  logging: false
});

User(sequelize);

sequelize.sync();
// Uncomment the line if you want to rerun DB seed
sequelize.sync({ force: true }).then(() => seed(sequelize));

export default sequelize;

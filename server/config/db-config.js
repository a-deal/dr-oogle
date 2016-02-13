import Sequelize from 'sequelize';

export var sequelize = new Sequelize ('oogle', '', '', {
    dialect : 'postgres',
    loggine : console.log
});

var Author = sequelize.define('authors', {
  firstName : {
    type : Sequelize.STRING,
    allowNull : false,
    field : 'first_name',
    unique : true
  },
  lastName: {
    type : Sequelize.STRING,
    allowNull : false,
    field : 'last_name',
    unique : true
  }
})

Author.sync();

export { Author }
export { Review }

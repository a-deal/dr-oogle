import Sequelize from 'sequelize';

export var sequelize = new Sequelize ('oogle', '', '', {
    dialect : 'postgres'
  });

export var Dentists = sequelize.define('dentists', {
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
  },
  url : {
    type: Sequelize.STRING
  },
  location : {
    type: Sequelize.STRING
  }
})

export var Reviews = sequelize.define('reviews', {
  comment : {
    type : Sequelize.TEXT,
    allowNull : false,
    field : 'comment'
  },
  date: {
    type : Sequelize.STRING,
    allowNull : false,
    field : 'date'
  },
  author: {
    type : Sequelize.STRING,
    allowNull : false,
    field : 'author'
  },
  rating : {
    type : Sequelize.STRING,
    field : 'rating'
  }

})

Dentists.sync();
Reviews.sync();

Dentists.hasMany(Reviews, {
  foreignKey : 'dentist_id'
});

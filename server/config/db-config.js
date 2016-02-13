import Sequelize from 'sequelize';

export var sequelize = new Sequelize ('oogle', '', '', {
    dialect : 'postgres',
    loggine : console.log
});

var Dentist = sequelize.define('dentists', {
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
    type:Sequelize.STRING
  }
})

var Reviews = sequelize.define('reviews', {
  comments : {
    type : Sequelize.TEXT,
    allowNull : false,
    field : 'content'
  },
  date: {
    type : Sequelize.DATE,
    allowNull : false,
    field : 'date'
  },
  author_firstName: {
    type : Sequelize.STRING,
    allowNull : false,
    field : 'author_firstname'
  },
  author_lastName: {
    type : Sequelize.STRING,
    allowNull : false,
    field : 'author_lastname'
  },
  rating : {
    type : Sequelize.INTEGER,
    field : 'rating'
  }

})

Dentist.hasMany(Review, {
  foreignKey : 'dentist_id'
});
Dentist.sync();
Review.sync();


export { Dentist }
export { Review }

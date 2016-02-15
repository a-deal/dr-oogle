import Sequelize from 'sequelize';
let sequelize = null;

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize (process.env.DATABASE_URL, {
    dialect: 'postgres'
  })
} else {
  sequelize = new Sequelize ('oogle', '', '', {
     dialect : 'postgres'
   });
}

let Reviews = sequelize.define('reviews', {
  comment : {
    type : Sequelize.TEXT,
    field : 'comment'
  },
  date: {
    type : Sequelize.STRING,
    field : 'date'
  },
  author: {
    type : Sequelize.STRING,
    field : 'author'
  },
  rating : {
    type : Sequelize.STRING,
    field : 'rating'
  }
})

let Dentists = sequelize.define('dentists', {
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

Dentists.hasMany(Reviews);

export { Dentists };
export { Reviews };
sequelize.sync();

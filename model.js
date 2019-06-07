const Sequelize = require('sequelize');

const sequelize = new Sequelize("sqlite:db.sqlite", {logging: false});

sequelize.define('person', 
    {
        name: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        }
    }
);

module.exports = sequelize;
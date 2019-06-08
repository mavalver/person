const Sequelize = require('sequelize');

const sequelize = new Sequelize("sqlite:db.sqlite", {logging: false});

sequelize.define(
    'person', 
    {
        name: {
            type: Sequelize.STRING,
            unique: { msg: "Name already exists"},
            validate: { is: { args: /^[a-z]+$/i, msg: "Invalid characters" }}
        },
        age: {
            type: Sequelize.INTEGER,
            validate: { 
                min: { args: [0], msg: "Age less than 0"},
                max: { args: [150], msg: "Age higher than 0"}
            }
        }
    }
);

module.exports = sequelize;
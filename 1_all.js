// import sequelize from './model.js';

const sequelize = require('./model.js');

const person = sequelize.models.person;

person.findAll()
.then( people => {
    people.forEach(element => {
        console.log(`    ${element.name} has ${element.age} years old`)
    });
})
.catch( err => console.log(`    ${err}`));
const sequelize = require('./model.js');

const person = sequelize.models.person;

sequelize.sync()
.then( () => person.count())
.then ( c => {
    if (c === 0){
        return (
            person.bulkCreate([
                {name: 'Peter', age: 22},
                {name: 'Anna', age: 23},
                {name: 'John', age: 30}
            ])
            .then( people => console.log(`   DB created with ${people.length} elements`))
        )
    } else {
        console.log(`    DB has ${c} elements`);
    }
})
.catch( err => console.log(`${err}`));
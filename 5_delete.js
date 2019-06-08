/*
 * Borra la persona indicada como parámetro (nombre)
 */

const person = require('./model.js').models.person;

// comprobamos los argumentos
if(process.argv.length !== 3){
    console.log("    syntax: node 5_delete.js <name>");
    process.exit(2);
}

const name = process.argv[2];

person.destroy({ where: {name: name}})
.then( n => {
    if (n === 0) throw `    ${name} not in DB`;
    console.log(`    ${name} removed`);
})
.catch( err => console.log(`    ${err}`));
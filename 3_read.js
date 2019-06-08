/*
 * Devuelve la edad de la persona indicada como parámetro (nombre)
 */

const person = require('./model.js').models.person;

// comprobamos los argumentos
if(process.argv.length !== 3){
    console.log("    syntax: node 3_read.js <name>");
    process.exit(2);
}

const name = process.argv[2];

person.findOne({ where: {name: name}})
.then( p => {
    if (!p) throw `    ${name} not in DB`;
    console.log(`    ${p.name} has ${p.age} years old`);
})
.catch( err => console.log(`    ${err}`));
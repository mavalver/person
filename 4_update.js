/*
 * Modifica la edad de la persona indicada como parámetro
 */

const person = require('./model.js').models.person;

// comprobamos los argumentos
if(process.argv.length !== 4){
    console.log("    syntax: node 4_update.js <name> <age>");
    process.exit(2);
}

const name = process.argv[2], age = process.argv[3];

person.update(
    {age},
    {where: {name}})
.then( n => {
    if (n[0] === 0) throw `    ${name} not in DB`;
    console.log(`    ${name} updated to ${age} age`);
})
.catch( err => console.log(`    ${err}`));
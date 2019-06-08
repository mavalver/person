const person = require('./model.js').models.person;

// validar argumentos. Se requieren 2, el nombre y la edad.
function validarArgumentos(args, msg){
    if(process.argv.length !== (2+args)){
        console.log(msg);
        process.exit(2);
    }
    return true;
}

validarArgumentos(2, "    syntax: node 2_create.js <name> <age>");

const name = process.argv[2], age = process.argv[3];

person.create({name, age})
.then( () => console.log(`    ${name} created with ${age} years`) )
.catch( err => console.log(`   ${err}`));
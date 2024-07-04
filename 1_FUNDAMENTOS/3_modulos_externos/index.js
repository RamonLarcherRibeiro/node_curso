const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
const nome = args['nome'];
const idade = args['idade'];
console.log(args)
console.log("Ola meu nome é "+nome+" ,tenho "+ idade +" anos :)")
const { log } = require('console');
const url = require('url');

address = 'https://www.meusite.com/catalogo/?produto=celular';

//url decomposta
parse_url = new url.URL(address);

console.log(parse_url)
console.log(parse_url.searchParams.get('produto'))

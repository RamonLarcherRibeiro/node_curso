const  path = require('path');

filePath = './pasta/pasta2/arquivo.pdf'

//diretorio
console.log(path.dirname(filePath))

//nome do arquivo
console.log(path.basename(filePath))

//extensao
console.log(path.extname(filePath))

//caminho absoluto
console.log(path.resolve(filePath))

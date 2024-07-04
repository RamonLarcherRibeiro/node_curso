import chalk from 'chalk';

// O método console.count() aceita um rótulo (label) como argumento opcional.
// Esse rótulo é usado para identificar a contagem específica que você deseja rastrear. 
// Se nenhum rótulo for fornecido, um rótulo padrão "default" será usado.
console.log('\n--USANDO CHALK PARA CONTAGEM--')
console.count('apple');
console.count('orange');
console.count('apple');
console.count('orange');
console.count('apple');

//USANDO CHALK PARA ESTILIZAR TEXTOS
console.log("\n--USANDO CHALK PARA ESTILIZAR--")
//cor do texto
console.log('Cor do texto:')
console.log(chalk.blue('azul da cor do mar'))
console.log(chalk.red('vermelho da cor do sangue'))


//cor de fundo
console.log('\nCor de fundo')
console.log(chalk.bgBlue('azul da cor do mar'))
console.log(chalk.bgRed('vermelho da cor do sangue'))

//estilo
console.log('\nEstilos')
console.log(chalk.italic('texto em italico'))
console.log(chalk.bold('texto em bold'))
console.log(chalk.underline("texto em underline"))

//Combinação de Estilos
console.log('\nCombinação de Estilos')
console.log(chalk.bgBlack.red.italic('preto da cor da noite ,vermelho da cor do sangue'))


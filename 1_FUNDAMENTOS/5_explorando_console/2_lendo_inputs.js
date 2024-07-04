import chalk from "chalk"
import { createInterface } from "readline"

//para ler entradas de dados usando readline precisamos criar uma interface[
const rl = createInterface({  
    input: process.stdin,
    output :process.stdout
})

rl.question('Posso começar uma guerra ou acabar com ela. \nPosso lhe dar a força dos heróis ou deixá-lo impotente.\nPosso ser capturado com um olhar, mas nenhuma força me obriga a ficar.\nQuem sou eu?\n',(resposta)=>{
    if(resposta.toLowerCase() == 'amor'){
        console.clear()
        console.log(chalk.bgBlack.red('o amor , parabens voce acertou !'))
    }else{
        console.clear()
        console.log('Voce errou !')
    }
    rl.close()
})
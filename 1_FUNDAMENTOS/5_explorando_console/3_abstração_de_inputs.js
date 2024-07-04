import inquirer from "inquirer";

inquirer.prompt([
    {
        name:'nome',
        message:'Qual o seu nome ?'
    },
    {
        name:'idade',
        message:'Qual a sua idade ?'
    }
]).then((resposta)=>{
    console.log('Prazer em te conhecer '+ resposta.nome)
})


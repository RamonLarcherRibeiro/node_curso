import chalk from 'chalk';
import { error } from 'console';
import fs from 'fs';
import inquirer from 'inquirer';

console.log('iniciamos o accounts');


function operation(){
    inquirer.prompt([{
        type: 'list',
        name:"action",
        message: 'oque voce deseja fazer',
        choices : ['Criar conta', 'Login','Sair']
    }]).then((answer)=>{
        const escolha = answer.action;

        if(escolha == "Criar conta"){
            createAccont();
        }else if ( escolha == "Login"){
            login()

        }else if ( escolha == "Sair"){
            process.exit()
        }



    }).catch(error => console.log('error'))
}

operation()

//check account 
function checkAccount(username){
    if(fs.existsSync(`accounts/${username}.json`)){
        return true
    }else{
        false
    }
}


//create account
function createAccont(){
    console.log(chalk.green("Defina as opções da sua conta a seguir"));
    inquirer.prompt([{
        name:"username",
        message:"Digite o seu username : ",
    },
    {
        name:"senha",
        message: "Digite sua senha : ",
    }]).then((answer)=>{
        if(checkAccount(answer.username) == true){
            console.clear();
            console.log(chalk.red("O username ja esta em uso por outra conta , escolha outro."))
            createAccont();
        }else{
            fs.writeFileSync(`accounts/${answer.username}.json`,`{"username":"${answer.username}","senha":"${answer.senha}"}`);
            console.log(chalk.green("conta criada com sucesso."));
            console.clear();
            operation();
        }   
    })
}

//login
function login(){
    inquirer.prompt([{
        name:"username",
        message:"Digite seu username : "
    },
    {
        name:"senha",
        message:"Digite sua senha : "
    }]).then((answer)=>{
         if(fs.existsSync(`accounts/${answer.username}.json`)){

            fs.readFile(`accounts/${answer.username}.json`,'utf8', (err, data)=>{
                if(data){
                    const json = JSON.parse(data);
                    if(json.username == answer.username){
                        if(json.senha == answer.senha){
                            console.clear()
                            console.log(chalk.green(`Ola ${answer.username}, seja bem vindo(a)\n`))
                        }else{
                            console.clear();
                            console.log(chalk.red("A tentativa de login falhou,as informações estão incorretas.\n"));
                            login();
                        }
                    }
                }
                if(err){
                    console.log("ocorreu um erro na leitura do arquivo")
                }
            })
         }else{
            console.clear();
            console.log(chalk.red("A conta nao foi encontrada.\n"))
            login()
         }
        
        
        })
}
const inquirer = require('inquirer')
const chalk = require('chalk')

try{
    inquirer.prompt([
        {
            name:'nome',
            message: "Qual é o seu nome?",
        },
        {
            name:'idade',
            message: "Qual é a sua idade?",
        },
    ])
    console.log(chalk.bgYellow.black(`${nome} tem ${idade} anos`))
}catch (err){
    console.log(err)
}

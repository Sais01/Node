const chalk = require('chalk')

const nota = 6

if(nota>=7){
    console.log(chalk.green.bold("Parabens, voce está aprovado!!!"))
}else{
    console.log(chalk.bgRed.black("Você precisa fazer a prova de recuperação"))
}

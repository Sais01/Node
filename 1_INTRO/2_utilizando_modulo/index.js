const fs = require('fs')//file System

fs.readFile('arquivo.txt', 'utf8', (err, data) => {

    if (err) {
        console.log(err)
    }else{
        console.log(data)
    }

})
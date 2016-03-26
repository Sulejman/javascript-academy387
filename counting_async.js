var fs = require('fs');

fs.readFile(process.argv[2],'utf8',function name(err, data) {
    if(err) throw err;
    //console.log(typeof data);
    console.log(data.split("\n").length - 1);    
})

//console.log("Evo me ovdje");
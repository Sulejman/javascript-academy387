var fs = require('fs');
var path = require('path');

var filtered = [];

fs.readdir(process.argv[2], (err, list) => {
    if(err) throw err;
    for(var i = 0; i<list.length; i++){
        if(path.extname(list[i]) == "."+ process.argv[3]){
            filtered.push(list[i]);
            console.log(list[i]);
        }
    }
})
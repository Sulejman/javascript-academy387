var bl = require('bl'); //Buffer list https://github.com/rvagg/bl
var http = require('http'); //https://nodejs.org/api/http.html

http.get(process.argv[2], (res) => {
    res.pipe(bl(function(err, data){
        console.log(data.toString());
    }))
    res.on('end', (err, data) => {
        http.get(process.argv[3], (res) => {
            res.pipe(bl(function(err, data){
                console.log(data.toString());
            }))
            http.on('end', (err, data) =>{
                res.pipe(bl(function(err, data){
                console.log(data.toString());
            }))
            })
        })
    })
})
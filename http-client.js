var http = require('http');//https://nodejs.org/api/http.html

http.get(process.argv[2], (res) => {
     console.log('Got response:' + res.statusCode);
     res.resume();
     res.setEncoding('utf8');
     res.on("data", (data) => {
        console.log(data);
     });
     res.on('error', (err) =>{
         console.log(err);
     })
})


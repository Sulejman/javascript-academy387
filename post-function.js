var http = require('http');
var querystring = require('querystring');

function createUser(user){
    
    if(user.firstName!=undefined && user.lastName!=undefined && user.gitUsername!=undefined && user.DOB!=undefined){
            var postData = querystring.stringify(user);
    }
    else{
        return "User is not defined properly!!";
    }
        
    var options = {
        hostname: 'www.sule.io',
        port: 1337,
        path: '/user',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': postData.length
        }
    };

    var req = http.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });
        res.on('end', () => {
            console.log('No more data in response.')
        })
        
        return querystring.stringify(res);
    });

    req.on('error', (e) => {
        console.log(`problem with request: ${e.message}`);
        return e;
    });

    // write data to request body
    req.write(postData);
    req.end();
    
}

var user = {
    gitUsername : "NekiGit", 
    firstName : "Asim", 
    lastName : "NekoPrezime",
    DOB: "1989-07-23"
}

//proba:
console.log(createUser(user));
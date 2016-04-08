var http = require('http');
var querystring = require('querystring');

/*var putData = querystring.stringify({
  'firstName' : 'Neki',
  'lastName': 'Neko'
});



var id = 2;

var options = {
  hostname: 'www.sule.io',
  port: 1337,
  path: `/user/${id}`,
  method: 'PUT',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': putData.length
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
});

req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});

// write data to request body
req.write(putData);
req.end();*/

function editUser(id, firstName, lastName, DOB, gitUsername ){
    
    var body = {};
   
    if(firstName!=undefined)
        body.firstName = firstName;
    if(lastName!=undefined)
        body.lastName = lastName;
    if(gitUsername!=undefined)
        body.gitUsername = gitUsername;
    if(DOB!=undefined)
        body.DOB = DOB;
        
    var putData = querystring.stringify(body);
    
    var options = {
        hostname: 'www.sule.io',
        port: 1337,
        path: `/user/${id}`,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': putData.length
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
            return res;
        })
    });

    req.on('error', (e) => {
        console.log(`problem with request: ${e.message}`);
        return e;
    });

    // write data to request body
    req.write(putData);
    req.end();
    
}

//proba:
console.log(editUser(id=2,firstName =  "Zmaj"));


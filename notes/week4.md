# Backend as a Service (BaaS)

## Mongoose Population

### [Objectives and Outcomes](https://www.coursera.org/learn/server-side-development/supplement/a523v/objectives-and-outcomes)

- Reference a MongoDB document from another document
- Use Mongoose population to populate information into a document from a referenced document

### Mongoose Population

> w4-01-mongoose-population.mp4

```javascript
var commentSchema = new Schema({
  rating: {type: Number, min: 1, max: 5, required: true},
  comment: {type: String, required: true},
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
}, {timestamps: true});
```

**Populating the Documsnts**

```javascript
Dishes.find({})
.populate('comments.postedBy')
.exec(function(err, dish){
  if(err) throw err;
  res.json(dish);
});
```

### Exercise (Video): [Mongoose Population](https://www.coursera.org/learn/server-side-development/lecture/Xhz0X/exercise-video-mongoose-population)

> w4-02-exercise-video-mongoose-population.mp4

**Instance method**

```javascript
User.methods.getName = function(){
  return (this.firstname + ' ' + this.lastname);
}
```

### [Exercise (Instructions): Mongoose Population](https://www.coursera.org/learn/server-side-development/supplement/HPaD3/exercise-instructions-mongoose-population)

In this exercise you learnt about cross-referencing Mongo documents using the ObjectId. In addition you learnt about using Mongoose population support for populating documents.

### [Mongoose Population: Additional Resources](https://www.coursera.org/learn/server-side-development/supplement/nB95K/mongoose-population-additional-resources)

**PDFs of Presentations**

- [1-Mongoose-Population.pdf](/assets/w4-1-Mongoose-Population.pdf)

**Mongoose Resources**

- [Mongoose Population](http://mongoosejs.com/docs/populate.html)

**Other Resources**

- [Mongoose: Referencing schema in properties or arrays](https://alexanderzeitler.com/articles/mongoose-referencing-schema-in-properties-and-arrays/)

## HTTPS and Secure Communication

### [HTTPS and Secure Communication: Objectives and Outcomes](https://www.coursera.org/learn/server-side-development/supplement/JkFED/objectives-and-outcomes)

- how to setup the HTTPS server and generating the cerificates and private key to configure the server
- Understand about secure communication using HTTPS

### [HTTPS and Secure Communication](https://www.coursera.org/learn/server-side-development/supplement/JkFED/objectives-and-outcomes)

- Symentic Key
- Public Key Cryptography

### [Exercise (Video): HTTPS and Secure Communication](https://www.coursera.org/learn/server-side-development/lecture/grjW7/exercise-video-https-and-secure-communication)

### [Exercise (Instructions): HTTPS and Secure Communication](https://www.coursera.org/learn/server-side-development/supplement/czucQ/exercise-instructions-https-and-secure-communication)

**Updating the bin/www File**

```js
#!/usr/bin/env node
/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('rest-server:server');
var http = require('http');
var https = require('https');
var fs = require('fs');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');

app.set('port', port);
app.set('secPort',port+443);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, function() {
   console.log('Server listening on port ',port);
});
server.on('error', onError);
server.on('listening', onListening);

/**
 * Create HTTPS server.
 */ var options = {
  key: fs.readFileSync(__dirname+'/private.key'),
  cert: fs.readFileSync(__dirname+'/certificate.pem')
};

var secureServer = https.createServer(options,app);

/**
 * Listen on provided port, on all network interfaces.
 */

secureServer.listen(app.get('secPort'), function() {
   console.log('Server listening on port ',app.get('secPort'));
});
secureServer.on('error', onError);
secureServer.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;

    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;

    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
```

**Updating app.js**

```js
// Secure traffic only
app.all('*', function(req, res, next){
    console.log('req start: ',req.secure, req.hostname, req.url, app.get('port'));
  if (req.secure) {
    return next();
  };

 res.redirect('https://'+req.hostname+':'+app.get('secPort')+req.url);
});
```

**Generating Private Key and Certificate**

```shell
openssl genrsa 1024 > private.key
openssl req -new -key private.key -out cert.csr
openssl x509 -req -in cert.csr -signkey private.key -out certificate.pem
```

### [HTTPS and Secure Communication: Additional Resources](https://www.coursera.org/learn/server-side-development/supplement/jdfmy/https-and-secure-communication-additional-resources)

**PDFs of Presentations**

[2-HTTPS-Secure-Communication.pdf]()

**Node's HTTPS Server**

- [Node HTTPS Server](https://nodejs.org/api/https.html)

**Book**

- [Kurose, James F., and Keith W. Ross. Computer networking: a top-down approach. Pearson, 2017, ISBN-10: 0134522206 • ISBN-13: 9780134522203.
](http://www.pearsonhighered.com/educator/product/Computer-Networking-A-Top-Down-Approach-Plus-Modified-MasteringEngineering-with-Pearson-eText-Access-Card-Package-7E/9780134522203.page)

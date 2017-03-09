# Week 1 [Introduction to Server-side Development](https://www.coursera.org/learn/server-side-development/home/week/1)

In this module you will be introduced to:
- Node
- Node modules
- Node HTTP server
- Express framework
- how to set up a REST API using Express.

## Full-Stack Web Development: The Big Picture

### Objectives and Outcomes

### What is Full Stack Web Development?

**Three Tier Architecture**

- Presentation layer
- Business Logic layer
- Data Access layer

### Course Overview

**Course Outline**

- Node.js and Node.js Modules
- Express Framework
- MongoDB
- Backend as a Service (BaaS)

### How to Use the Learning Resources?

### Full Stack Web Development: Additional Resources

**PDFs of Presentations**

- FSWD-BigPicture.pdf
- 0-Course-Overview.pdf

**Useful Links**
- [What is a Full Stack developer?](http://www.laurencegellert.com/2012/08/what-is-a-full-stack-developer/)
- [Wait, Wait… What is a Full-stack Web Developer After All?](http://edward-designer.com/web/full-stack-web-developer/)
- [The Myth of the Full-stack Developer](http://andyshora.com/full-stack-developers.html)
- [Multi-tier Architecture](https://en.wikipedia.org/wiki/Multitier_architecture)
- [What is the 3-Tier Architecture?](http://www.tonymarston.net/php-mysql/3-tier-architecture.html)

## Introduction to Node.js and NPM

### Objectives and Outcomes

- install Node.js and NPM
- verify the installation and ready for using Node.js and NPM

### Node.js and NPM

**What is Node.js?**

- Javascript runtime built on Chrome V8 Javascript Engine
- Uses an event-driven, non-blocking I/O model

### Exercise (Video) Setting up Node.js and NPM

w1-05-exercise-video-setting-up-node-js-and-npm.mp4

### Excerise (INstructions): Setting up Node.js and NPM

<https://nodejs.org>

### Introduction to Node.js and NPM: Additional Resources

**PDFs of Presentation**

1-Nodejs.pdf

**Node and NPM**

- [Nodejs.org](https://nodejs.org/)
- [Npmjs.com](https://www.npmjs.com/)
- [Node API Document](https://nodejs.org/api/)
- [NPM Document](https://docs.npmjs.com/)

## Node Modules

### Objectives and Outcomes

- Write simple Node application and run them using Node
- Develop Node modules and use them within your Node applications
- Learn about using callbacks and handling errors within your Node application

### Node Modules

> w1-06-node-modules.mp4

- CommonJS API defines a module format
- Node follows the CommonJS module specification

**Node Modules**

- Each file in Node is its own module
- THe module variable gives aceess to the current module definistion in a file
- The `module.exports` vaariable determines the export from the current module
- The `require` function is used to import a module

### Exercise (Video): Understanding Node Modules

> w1-07-exercise-video-understanding-node-modules.mp4

```
module.exports = function(){
  return {
    perimeter: function(x,y){ return 2*(x+y)},
    area: function(x,y){ return (x*y) }
  };
}
```

```
exports.perimeter = function(x,y){
  return 2*(x+y);
}

exports.area = function(x,y){
  return x*y;
}
```

### Exercise (Instructions): Understanding Node Modules

### Node Modules: Callbacks and Error Handling

> w1-08-node-modules-callbacks-and-error-handling.mp4

**First-class function**: A function can be treated the same way as any other variable

**Closures**:

- A function defined inside another function has access to all the variables declared in the outer function (outer scope)
- The inner function will conintue to have access to the variables from the outer scope even after the outer function has returned

**Acynchronous Programming**

### Node Modules: Further Details

> w1-09-node-modules-further-details.mp4

- File-based Modules
- Core Modules
- External Node modules

**Semantic Versioning**

- Major Version.Minor Version.Patch
- spcify the acceptable package version:
  - Exact: @"4.0.0"
  - Patch acceptable: "~4.0.0"
  - Minor version aceptable: "^4.0.0"

### Exercise (Video):Node Modules: Callbacks and Error Handling

> w1-10-exercise-video-node-modules-callbacks-and-error-handling.mp4

### Exercise (Instructions):Node Modules: Callbacks and Error Handling

### Node Modules: Additional Resources

**PDFs of Presentations**

- 2-Node-Modules.pdf
- 4-Node-Modules-Further.pdf
- 3-Node-Callbacks-Error-Handling.pdf

**Node Resources**

- [Node Modules](https://nodejs.org/dist/latest-v4.x/docs/api/modules.html)
- [yargs](https://github.com/yargs/yargs)

**Other Resources**

- [CommonJS](http://www.commonjs.org/)
- [CommonJS Module Format](http://wiki.commonjs.org/wiki/Modules/1.1.1)
- [RequireJS](http://requirejs.org/)

## Node and HTTP

### Objectives and Outcomes

- Create a simple HTTP server using the Node HTTP core module
- Create a web server to serve static HTML file from a folder

### The HTTP Protocol

> w1-11-the-http-protocol.mp4

**HTTP Response Codes (Main ones)**

- 200 OK
- 201 Created
- 301 Moved Permanently
- 304 Not Modified
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 422 Unprocssable Entry
- 500 Internal Server Error
- 505 HTTP Version Not Supported

### Node and the HTTP Module

> w1-12-node-and-the-http-module.mp4

### Exercise (Video): Node and the HTTP Module

> w1-13-exercise-video-node-and-the-http-module.mp4

### Exercise (Instructions): Node and the HTTP Module

`node server-2.js`

### Node and HTTP: Additional Resources

**PDFs of Presentations**

- 5-HTTP-Protocol.pdf
- 6-Node-HTTP.pdf

**Node Resources**

- [Node HTTP](https://nodejs.org/api/http.html)
- [Anatomy of an HTTP Transation](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)
- [fs Module](https://nodejs.org/dist/latest-v4.x/docs/api/fs.html)
- [path Module](https://nodejs.org/dist/latest-v4.x/docs/api/path.html)

**HTTP Resources**

- [Hypertext transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
- [List of HTTP Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

## Introduction to Express

### Objectives and Outcomes

- Implement a web server using the Express framework
- Develop a web server that supports a REST API
- Use Express router to implement support for the REST API

### Introduction to Express

> w1-14-introduction-to-express.mp4

**What is Express**

- web framework for Node.js
- provides a robust set of features
- many third-party middleware

### Exercise (Video): Introduction to Express Part 1

> w1-15-exercise-video-introduction-to-express-part-1.mp4

### Exercise (Instructions): Introduction to Express Part 1

### Brief Representational State Transfer (REST)

> w1-16-brief-representational-state-transfer-rest.mp4

### Express Router

> w1-17-express-router.mp4

### Exercise (Video): Introduction to Express Part 2

> w1-18-exercise-video-introduction-to-express-part-2.mp4

### Exercise (Instructions): Introduction to Express Part 2

`node server-4.js`

`node server-5.js`

### Introduction to Express: Additional Resources

**PDFs of Presentations**

- 7-Intro-Express.pdf
- 9-Express-Router.pdf
- 8-REST.pdf

**Express Resources**

- [ExpressJS](http://expressjs.com/)
- [Connect](https://github.com/senchalabs/connect)
- [Express Wiki](https://github.com/expressjs/express/wiki)
- [morgan](https://github.com/expressjs/morgan)
- [body-parser](https://github.com/expressjs/body-parser)

**Other Resources**

- [Understanding Express.js](http://evanhahn.com/understanding-express/)
- [A short guide to Connect Middleware](https://stephensugden.com/middleware_guide/)

*The End*



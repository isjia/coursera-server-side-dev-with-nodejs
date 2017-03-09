# Week 2 [Data, Data, Where art Thou Data?](https://www.coursera.org/learn/server-side-development/home/week/2)

## Express Generator

### Objectives and Outcomes

Express Generator: a scarffold tool to quickly generate an Express application

- Quickly scarffold out a typical Express application
- Build an Express server to support REST API

### Express Generator

> w2-express-generator.mp4

- npm package: `npm install express-generator -g`
- `express APP_Name`
- `npm intall`

### Exercise (Video): Express Generator

> w2-exercise-video-express-generator.mp4

- ` npm install express-generator -g`
- `express node-express-gen`
- `npm install`
- `npm start`

### Express Generator: Additional Resources

**PDFs of Presentations**

- 1-Express-Generator.pdf

**Express Generator Resources**

- [Express](http://expressjs.com/)
- [Express Generator](http://expressjs.com/en/starter/generator.html)

## Introduction to MongoDB

### Objectives and Outcomes

- feature of MongoDB
- difference between SQL and NoSQL DB
- run MongoDB server
- mongo REPL shell

### Introduction to MongoDB

> w2-introduction-to-mongodb.mp4

### Exercise (Video): Introduction to MongoDB

> w2-exercise-video-introduction-to-mongodb.mp4

- db -> collectioins -> documents
- `mongo`: start mongo shell
- `db`: show currrent database
- `use coFusion`: switch db
- `db.help()`
- `db.dishes.find().pretty()`

### Exercise (Instructions): Introduction to MongoDB

- `mongod --dbpath=data`
- `mongo`

### Introduction to MongoDB: Additional Resources

**PDFs Presentations**

- 2-Intro-MongoDB.pdf

**MongoDB Resources**

- [MOngoDB](http://www.mongodb.org/)
- [MongoDB documentation](http://docs.mongodb.org/manual/)
- [MongoDB Installation](http://docs.mongodb.org/manual/installation/)
- [The mongo Shell](http://docs.mongodb.org/manual/mongo/)

## Node and MongoDB

### Objectives and Outcomes

- configure Node application to communicate with a MogoDB server
- Perform various db operations

### Node and MongoDB

>w2-node-and-mongodb.mp4

- Node MongoDB Driver `npm install mongodb --save`
- support both callback based and promise based interactions

### Exercise (Video): Node and MongoDB Part 1

> w2-exercise-video-node-and-mongodb-part-1.mp4

### Exercise (Instructions): Node and MongoDB Part 1

`./node-mongodb/node simpleserver.js`

### Exercise (Video): Node and MongoDB Part 2

> w2-exercise-video-node-and-mongodb-part-2.mp4

### Exercise (Instructions): Node and MongoDB Part 2

### Node and MongoDB: Additional Resources

**PDFs of Presentations**

- 3-Node-MongoDB.pdf

**MongoDB Resources**

- [MongoDB Native Driver](https://github.com/mongodb/node-mongodb-native)
- [MongoDB NodeJS Native Driver Documentation](http://mongodb.github.io/node-mongodb-native/)

## Mongoose ODM

### Objectives and Outcomes

- Define and construct Mongoose schemas and models
- Interact with MongoDB server using Mongoose from your Node application

### Mongoose ODM

**Mongoose ODM**

- Object Data Model
- Object Document Mapping
- Object relational mapping (ORM)
- Adds structure to MongoDB documents through schema

**Mongoose Schema**

- Schema: structure of data to be stored; defines all the fields of your document
- Schema types: String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array
- Schema is used to create a Model function

### Exercise (Video): Mongoose ODM

> w2-exercise-video-mongoose-odm.mp4

### Exercise (Instructions): Mongoose ODM

> w2-exercise-video-mongoose-odm.mp4

- create a schema, `var dishSchema = new Schema({…}, {timestamps: true});`
- create a model, `var Dishes= moogose.model(‘Dish’, dishSchema);`
- module.exports

### Exercise (Instructions): Mongoose ODM

### Mongoose ODM: Additional Resources

**PDFs of Presentations**

- 4-Mongoose-ODM.pdf

**Mongoose Resources**

- [Mongoose](http://mongoosejs.com/)
- [Mongoose Documentation](http://mongoosejs.com/docs/guide.html)
- [Mongoose Schemas](http://mongoosejs.com/docs/guide.html)
- [Mongoose Models](http://mongoosejs.com/docs/models.html)
- [Mongoose Sub-documents](http://mongoosejs.com/docs/subdocs.html)
- [Mongoose-currency](https://www.npmjs.com/package/mongoose-currency)

**Other Resources**

- [Multiple collections vs Embedded documents](http://openmymind.net/Multiple-Collections-Versus-Embedded-Documents/#1)

## Assignments

> w2-assignment-2-video-requirements.mp4




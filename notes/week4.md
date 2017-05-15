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

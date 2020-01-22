//
const Mern = require('../models/Mern');
//imoprt jason daa by require method
const mernData = require('./mern.json');

//delete all Json data first 
//insert mernData into mern collections
Mern.deleteMany({}).then(() => {
  Mern.collection.insert(mernData)
    .then(myMern => {
      console.log(myMern)
    })
    .catch(err => {
      console.log(err)
    })
})

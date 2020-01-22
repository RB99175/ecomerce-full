//setting up Json data for the mern controller
const Mern = require("../models/Mern");
let mernController = {
  get: (req, res) => {
    Mern.find({}).then(mern => res.json(mern));
  },
  //setting up post to add the Mern data redirecting the page to homepage mern
  post: (req, res) => {
    Mern.create(req.body).then(() => res.redirect("/mern"));
  },
//finding a new record and updating a new one 
  put: (req, res) => {
    Mern.findOneAndUpdate({ _id: req.params.id }, req.body).then(() => {
      Mern.find().then(mern => res.json(mern))
    });
  },
//deleting record
  delete: (req, res) => {
    Mern.deleteOne({ _id: req.params.id}).then(()=>{
      Mern.find().then(mern => res.json(mern))
    });
  }
}; 
module.exports = mernController;
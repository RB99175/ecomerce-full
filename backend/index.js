const express = require('express')
const parser = require('body-parser');
const app = express();
const cors = require('cors')


app.use(cors())
app.use(parser.json());
//first setting up the route on 5000 local host
const mernRouter = require('./routes/mern');

//app using mern router
app.use("/mern", mernRouter);

//make the router listen
app.listen(5000, () => console.log('listening on port 5000')); 
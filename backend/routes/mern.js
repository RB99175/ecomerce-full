const express = require('express')
const router = express.Router()
const mernController = require("../controllers/mern")

//setting routefor controller.get and so on
router.get('/', mernController.get)
router.post('/', mernController.post)
// update exisiting record by id 
router.put('/:id', mernController.put)
//delete record by id
router.delete('/:id', mernController.delete)


module.exports = router
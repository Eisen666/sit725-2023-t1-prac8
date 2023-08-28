let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/dog', controller.insertDog);
router.get('/dog', controller.getAllDog);
router.delete('/cat/:id', comtroller.deleteDog);

module.exports = router;
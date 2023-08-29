let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/dog', controller.postDog);
router.get('/dog', controller.getAllDog);
router.delete('/dog/:id', controller.deleteDog);

module.exports = router;
var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Strive Assessment' });
});

router.post('/', user_controller.save_user);

router.post('/saveQuestion', user_controller.save_question);

module.exports = router;

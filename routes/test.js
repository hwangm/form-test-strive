var express = require('express');
var router = express.Router();

router.get('/:id/start', (req, res, next) => {
  res.render('testStart', {userId: req.params.id});
});

router.get('/:id/question/:questionId', (req, res, next) => {
  switch(req.params.questionId){
    case '1':
      res.render('question1', {userId: req.params.id});
      break;
    case '2':
      res.render('question2', {userId: req.params.id});
      break;
    case '3':
      res.render('question3', {userId: req.params.id});
      break;
    case '4':
      res.render('question4', {userId: req.params.id});
      break;
    case '5':
      res.render('question5', {userId: req.params.id});
      break;
    default:
      res.send('Error');
      break;
  }
});

router.get('/:id/finish', (req, res, next) => {
  res.render('finish');
});

module.exports = router;

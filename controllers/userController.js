var User = require('../models/user');
var sanitize = require('mongo-sanitize');

exports.save_user = (req, res, next) => {
    req.body = sanitize(req.body);
    let user = new User({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email_address: req.body.userEmail
    });
    user.save((err, user) => {
        if(err) console.log(err);
        res.render('signupComplete', {'testId': user.id})
    });

};

exports.save_question = (req, res, next) => {
    req.body = sanitize(req.body);
    var update;
    switch(req.body.question){
        case '1':
            update = { q1: req.body.answer };
            break;
        case '2':
            update = { q2: req.body.answer };
            break;
        case '3':
            update = { q3: req.body.answer };
            break;
        case '4':
            update = { q4: req.body.answer };
            break;
        case '5':
            update = { q5: req.body.answer };
            break;
        default:
            console.log('error');
            break;
    }
    User.findByIdAndUpdate(req.body.id, update, (err, result) => {
        if(err) console.log(err);
        res.send('success');
    });
}

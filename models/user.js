var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        first_name: {type: String, required: true},
        last_name: {type: String, required: true},
        email_address: {type: String, required: true},
        testId: String,
        q1: String,
        q2: String,
        q3: String,
        q4: String,
        q5: String
    }
);

module.exports = mongoose.model('User', UserSchema);
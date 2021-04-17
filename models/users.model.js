const mongoose = require('mongoose');
//const { SurveyTriggerRunExpression } = require('survey-react');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    survey: String,
    tests: [
    {testAnchor: String, years: [ Number ], description: String, importanceDesc: String},
    ]
  },  

{ timestamps: true,});

const User = mongoose.model('User', userSchema);

module.exports = User


const router = require("express").Router();
const User = require("../models/users.model");
const securePin = require("secure-pin");
const countResultsModule = require("../models/countResults.js")


router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:username").get((req, res) => {
  const username = req.params.username;

  User.find({ username: `${username}` }).then((user) => res.json(user));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const survey = req.body.survey;

  const tests = countResultsModule(survey);
  
  const newUser = new User({username, survey, tests });

  newUser
    .save()
    .then(() => res.json("user added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

const countResults = (survey) => {
  
  const surveyObj = JSON.parse(survey);
  var tests = [];
  console.log(surveyObj);

  if (surveyObj.gender == "man" && surveyObj.age == "60") {
    tests.push({ testName: "brainTest", years: countFreq(surveyObj, 3) });
  }

  if(true){
      tests.push({ testName: "brainTest", years: countFreq(surveyObj, 3)});
  }

  if (surveyObj.gender == "man" && surveyObj.age == "60") {
    tests.push({ testName: "heartTest", years: countFreq(surveyObj, 10) });
  }

  return tests;
};

const countFreq = (surveyObj, freq) => {
  var yearsArray = [];
  var readyArray = [];
  const currentYear = new Date().getFullYear();
  var age = surveyObj.age;
  var birthYear = currentYear - age;
  var endYear = birthYear + 100;

  for (var i = currentYear; i <= endYear; i++) {
    yearsArray.push(i);
  }

  yearsArray.forEach(function (element) {
    if (element % freq == 0) {
      readyArray.push(element);
    }
  });

  return readyArray;
};

module.exports = router;

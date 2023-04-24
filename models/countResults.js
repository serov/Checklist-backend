const _ = require('lodash');

const testlogic = [
       {testAnchor:"hiv", 
        conditions: {},
        frequency: {oneTime: 25}},
            
        //-----Cholesterol Test------//

        // { testAnchor:"cholesterolTest", 
        // conditions: {bloodPressure: "high"},
        // frequency: {repeatEvery: 4, startYear: 21, endYear: 40}},

        // { testAnchor:"cholesterolTest", 
        // conditions: {bmi: [">", 30]},
        // frequency: {repeatEvery: 4, startYear: 21, endYear: 40}},

        // {testAnchor:"cholesterolTest", 
        // conditions:  {},
        // frequency: {repeatEvery: 3, startYear: 40, endYear: 75}},

        // {testAnchor:"cholesterolTest", 
        // conditions:  {highCholesterol: true,},
        // frequency: {repeatEvery: 1, startYear: 30, endYear: 75}},



         //-----Diabetis------//

        { testAnchor:"diabeticEye", 
        conditions: {diabetes: "true"},
        frequency: {repeatEvery: 1, startYear: 18}},

        { testAnchor:"FPG", 
        conditions: {familyDiabetes: "true"},
        frequency: {repeatEvery: 1, startYear: 30}},

        { testAnchor:"FPG", 
        conditions: {bmi: [">", 25]},
        frequency: {repeatEvery: 1, startYear: 30}},

        { testAnchor:"FPG", 
        conditions: {bloodPressure: "high"},
        frequency: {repeatEvery: 1, startYear: 30}},

        { testAnchor:"FPG", 
        conditions: {},
        frequency: {repeatEvery: 3, startYear: 45}},




        {testAnchor:"aneurysmScreening", 
        conditions: {gender: "man",},
        frequency: {oneTime: 65}},

        { testAnchor:"CT-h", 
        conditions: {smokingQuestion: "smokingNow",},
        frequency: {repeatEvery: 1, startYear: 55, endYear: 74}},

        { testAnchor:"CT-l", 
        conditions: {smokingQuestion: "quitSmoking"},
        frequency: {repeatEvery: 1, startYear: 74}},

 
        //-----Cancer------//


        { testAnchor:"breastcancer", 
        conditions: {gender: "woman"},
        frequency: {repeatEvery: 1, startYear: 45, endYear: 54}},

        { testAnchor:"breastcancer", 
        conditions: {gender: "woman"},
        frequency: {repeatEvery: 1, startYear: 54, endYear: 71}},

        { testAnchor:"breastcancer", 
        conditions: {gender: "woman"},
        frequency: {repeatEvery: 1, startYear: 54, endYear: 71}},



        { testAnchor:"stomachCancerGeneticTest", 
        conditions: {stomachCancerDetails: "morethan3"},
        frequency: {oneTime: 20}},

        { testAnchor:"stomachCancerGeneticTest", 
        conditions: {stomachCancerDetails: "under40"},
        frequency: {oneTime: 27}},

        { testAnchor:"stomachCancerGeneticTest", 
        conditions: {stomachCancerDetails: "under50"},
        frequency: {oneTime: 35}},

        { testAnchor:"stomachCancerGeneticTest", 
        conditions: {stomachCancerDetails: "complex"},
        frequency: {oneTime: 35}},


        



         //-----PSA------//

        { testAnchor:"psa", 
        conditions: {gender: "man", prostateCancer: "true", prostateCancerDetails: "morethan1"},
        frequency: {repeatEvery: 1, startYear: 40, endYear: 70}},

        { testAnchor:"psa", 
        conditions: {gender: "man", prostateCancer: "true", prostateCancerDetails: "under65"},
        frequency: {repeatEvery: 2, startYear: 42, endYear: 90}},

        { testAnchor:"psa", 
        conditions: {gender: "man", prostateCancer: "true", prostateCancerDetails: "over65"},
        frequency: {repeatEvery: 3, startYear: 45, endYear: 95}},

        { testAnchor:"psa-baseline", 
        conditions: {gender: "man"},
        frequency: {oneTime: 40}},



         //-----Colonoscopy------//



        { testAnchor:"colonoscopy", 
        conditions: {colonCancerMan: "true"},
        frequency: {repeatEvery: 10, startYear: 75, endYear: 90}},

        { testAnchor:"colonoscopy", 
        conditions: {colonCancerWoman: "true"},
        frequency: {repeatEvery: 10, startYear: 75, endYear: 90}},

        { testAnchor:"colonoscopy", 
        conditions: { colonCancerDetails: "lessthan60"},
        frequency: {repeatEvery: 5, startYear: 40, endYear: 75}},

        { testAnchor:"colonoscopy", 
        conditions: {colonCancerDetails: "manyRelatives"},
        frequency: {repeatEvery: 5, startYear: 40, endYear: 75}},

        { testAnchor:"colonoscopy", 
        conditions: {colonCancerDetails: "over60"},
        frequency: {repeatEvery: 10, startYear: 40, endYear: 75}},

        { testAnchor:"colonoscopy", 
        conditions: {colonCancerDetails: "manyCousins"},
        frequency: {repeatEvery: 10, startYear: 40, endYear: 75}},



        { testAnchor:"gastroscopy", 
        conditions: {chronicStomach: "true"},
        frequency: {repeatEvery: 10, startYear: 40, endYear: 75}},


        { testAnchor:"FOBT", 
        conditions: {},
        frequency: {repeatEvery: 10, startYear: 45, endYear: 75}},



         //-----Vaccines------//

        { testAnchor:"HPV", 
        conditions: {gender: "woman"},
        frequency: {oneTime: 18}},
        
        { testAnchor:"herpesVaccine", 
        conditions: {},
        frequency: {oneTime: 50}},

        { testAnchor:"pneumococcus", 
        conditions: {},
        frequency: {oneTime: 60}},

        { testAnchor:"pillar", 
        conditions: {},
        frequency: {repeatEvery: 10}},

        { testAnchor:"diphtheria", 
        conditions: {},
        frequency: {oneTime: 20}},

        { testAnchor:"measles", 
        conditions: {},
        frequency: {oneTime: 24}},



        
        //-----Melanoma------//

        {testAnchor:"melanoma", 
        conditions: {melanomaMan: "true"},
        frequency: {repeatEvery: 1}},

        {testAnchor:"melanoma", 
        conditions: {melanomaWoman: "true"},
        frequency: {repeatEvery: 1}},



         //-----Other------//

        {testAnchor:"dispancer", 
        conditions: {},
        frequency: {repeatEvery: 3, startYear: 15, endYear: 45}},

        {testAnchor:"dentist", 
        conditions: {},
        frequency: {repeatEvery: 2, endYear: 65}},

        {testAnchor:"vitaminD", 
        conditions: {},
        frequency: {oneTime: 18}},



        //-----Osteoporosis------//

        {testAnchor:"osteoporosis", 
        conditions: {brokeBone: "true"},
        frequency: {repeatEvery: 5, startYear: 50, endYear: 69}},

        {testAnchor:"osteoporosis", 
        conditions: {relativeHipBroke: "true"},
        frequency: {repeatEvery: 5, startYear: 50, endYear: 69}},

        {testAnchor:"osteoporosis", 
        conditions: {alcoholDrink: "heavyDrinker"},
        frequency: {repeatEvery: 5, startYear: 50, endYear: 69}},
    
        //Osteoporosis 70+//

        {testAnchor:"osteoporosis", 
        conditions: {brokeBone: "true"},
        frequency: {repeatEvery: 3, startYear: 70}},

        {testAnchor:"osteoporosis", 
        conditions: {relativeHipBroke: "true"},
        frequency: {repeatEvery: 3, startYear: 70}},
        desc: "Каждый год с 45 до 50"

        {testAnchor:"osteoporosis", 
        conditions: {alcoholDrink: "heavyDrinker"},
        frequency: {repeatEvery: 3, startYear: 70}},
        desc: "Каждый год с 30 до 5"

        //в будущем сделать разделение по полу


        // BMI //

        { testAnchor:"Dietologist", 
        conditions: {bmi: [">", 25]},
        frequency: {oneTime: 18}},

        { testAnchor:"Dietologist", 
        conditions: {bmi: ["<", 18]},
        frequency: {oneTime: 18}},

   ]; 

   var comparisons = {
    '<': function(a, b) {return a < b},
    '>': function(a, b) {return a > b}
}   

const countResultsModule = (survey) => {
  
    var surveyObj = JSON.parse(survey);
    var tests = [];


    testlogic.forEach(function (element) {

        var isChecked = true; //тест выбран для пользователя
        var conditions = element.conditions;


     
         Object.entries(conditions).forEach(function (conditionElement) { //делает массив из объектов conditions [item1, item2]
            
            
            

            if(typeof(surveyObj[conditionElement[0]]) == "object") { 
                switch(typeof(conditionElement[1])) { 
                    case "object":   
                    if(comparisons[conditionElement[1][0]](conditionElement[1][1], surveyObj[conditionElement[0][0]])) {
 
                    } else {
                        
                        isChecked = false
                    }; //if comparisons[>](Условие139,> Мое120) (так можно обратиться). Если оно true, то тест отменяется
                    break;
    
                    case "string":
                    if(conditions[conditionElement[0]] !== surveyObj[conditionElement[0]].toString()) {isChecked = false;}; break; //если значение есть, то оно автоматически true
                    default: break;
                   } 
            }

            if(typeof(surveyObj[conditionElement[0]]) == "string" || typeof(surveyObj[conditionElement[0]]) == "undefined" || typeof(surveyObj[conditionElement[0]]) == "number" ) {
                switch(typeof(conditionElement[1])) {
                    case "object":   
                    if(comparisons[conditionElement[1][0]](surveyObj[conditionElement[0]], conditionElement[1][1])) {
                    } else {
                        isChecked = false
                    }; 
                    break;

                    case "undefined":
                        isChecked = false; 
                        break;

                    case "null":
                        isChecked = false;
                        break;    
    
                    case "string": 
                    if(conditions[conditionElement[0]] !== surveyObj[conditionElement[0]]) {isChecked = false;}; break;
                    default: break;
   
                   } 
            }

              
         })




        if(isChecked){
            tests.push({ testAnchor: element.testAnchor, years: countFreq(surveyObj, element.frequency)}); 
        } 
        

     })
     
    removeDuplicates(tests) 

    return tests;
  };



  function removeDuplicates(testsArray) {

    for (var i = 0; i < testsArray.length; i++) { 
        for (var j = i+1; j < testsArray.length; j++) {
            if (testsArray[i].testAnchor === testsArray[j].testAnchor) {
                testsArray[i].years = _.union(testsArray[i].years, testsArray[j].years);
                testsArray.splice(j, 1);
                j--;
            }
        

        // if(testsArray[i].testAnchor === testsArray[i+1].testAnchor) {
        //     _.union(testsArray[i].years, testsArray[i+1].years)
        // }
    }
    }

  }


  const countFreq = (surveyObj, freq) => {
    var yearsArray = [];
    var readyArray = [];
    
    if(typeof freq === "number") {
        freq.startYear = freq.startYear + getRandomInt(1);
    }
    

    const currentYear = new Date().getFullYear();
    var age = 18;

    
    if (typeof(surveyObj.age) == "string") {
       age = surveyObj.age;
    }


    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    var birthYear = currentYear - age;
    var endYear = birthYear + 80;
  
    for (var i = currentYear; i <= endYear; i++) {
      yearsArray.push(i);
    }

    if (freq.oneTime !== undefined) {
        if (currentYear>=(birthYear+freq.oneTime)) {
            readyArray.push(currentYear + Math.floor(Math.random() * 5)+1)
        } else {readyArray.push(birthYear+freq.oneTime);}
        
    }
    else {
            yearsArray.forEach(function (element) {

                
            if(typeof freq.startYear !== 'undefined' && typeof freq.endYear !== 'undefined' ) {
                if ((element - birthYear) % freq.repeatEvery == 0 && element > (birthYear+freq.startYear) && element <= (birthYear+freq.endYear)) {
                    readyArray.push(element)
                }
            };
            
            if(typeof freq.startYear == 'undefined' && typeof freq.endYear !== 'undefined' ) {
                if (element % freq.repeatEvery == 0 && element < (birthYear+freq.endYear)) {
                    readyArray.push(element)
                }
            }        
            
            if(typeof freq.startYear !== 'undefined' && typeof freq.endYear == 'undefined' ) {
                if (element % freq.repeatEvery == 0 && element > (birthYear+freq.startYear)) {
                    readyArray.push(element)}}  

            if(typeof freq.startYear == 'undefined' && typeof freq.endYear == 'undefined' ) {
                if (element % freq.repeatEvery == 0) {
                    readyArray.push(element)}}       
        });}

        return readyArray;
       
    }


module.exports = countResultsModule;

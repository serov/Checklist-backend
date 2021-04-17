
const testlogic = [
       {   testAnchor:"hiv", 
           testName: "ВИЧ",
           description: "Тест на ВИЧ",
        conditions: 
            {},
        frequency: {
            repeatEvery: 4,
            startYear: 15,
            endYear: 65}
        },
            

        { testAnchor:"cholesterolTest", 
        conditions: {bloodPressureTop: [">", 135]},
        frequency: {repeatEvery: 4, startYear: 21, endYear: 40}},

        { testAnchor:"cholesterolTest", 
        conditions: {bloodPressureLow: [">", 85]},
        frequency: {repeatEvery: 4, startYear: 20, endYear: 40}},

        {   testAnchor:"cholesterolTest40+", 
            testName: "Тест на холестерин",
        conditions: 
            {},
        frequency: {
            repeatEvery: 1,
            startYear: 40,
            endYear: 75}
        },

        {   testAnchor:"aneurysmScreening", 
            testName: "Abdominal aortic aneurysm screening",
        conditions: 
            {gender: "man",
             age: [">", 65]},
        frequency: {
                repeatEvery: 1,
                startYear: 65,
                endYear: 100}
        },

        { testAnchor:"CT-h", 
        conditions: 
            {smokingQuestion: "smokingNow",
        },
        frequency: {
            repeatEvery: 1,
            startYear: 55,
            endYear: 74}
        },

        { testAnchor:"CT-l", 
        conditions: 
            {smokingQuestion: "quitSmoking",
        },
        frequency: {
            repeatEvery: 1,
            startYear: 74,
            }
        },

        { testAnchor:"diabetis", 
        conditions: 
            {smokingQuestion: "quitSmoking",
        },
        frequency: {
            repeatEvery: 1,
            startYear: 74,
            endYear: 100}
        },

        { testAnchor:"breastcancer45", 
        conditions: 
            {gender: "woman",
        },
        frequency: {
            repeatEvery: 1,
            startYear: 45,
            endYear: 54}
        },

        { testAnchor:"breastcancer55", 
        conditions: 
            {gender: "woman",
        },
        frequency: {
            repeatEvery: 1,
            startYear: 54,
            endYear: 71}
        },

        { testAnchor:"psa40", 
        conditions: 
            {gender: "man",
            prostateCancer: "true",
            prostateCancerDetails: "morethan1"
        },
        frequency: {
            repeatEvery: 1,
            startYear: 40,
            endYear: 70,
            
            }
        },

        { testAnchor:"psa45", 
        conditions: 
            {gender: "man",
            prostateCancer: "true",
            prostateCancerDetails: "under65"
        },
        frequency: {
            repeatEvery: 2,
            startYear: 42,
            endYear: 90,
            
            }
        },

        { testAnchor:"psa-baseline", 
        conditions: 
            {gender: "man",
        },
        frequency: {
            oneTime: 40,
            }
        },

        { testAnchor:"psa65", 
        conditions: 
            {gender: "man",
            prostateCancer: "true",
            prostateCancerDetails: "over65"
        },
        frequency: {
            repeatEvery: 3,
            startYear: 45,
            endYear: 95,
            
            }
        },
        { testAnchor:"colonoscopy50+", 
        conditions: 
            {
                colonCancerMan: "true",
        },
        frequency: {
            repeatEvery: 10,
            startYear: 50,
            endYear: 75, 
            }
        },

        { testAnchor:"colonoscopy50+", 
        conditions: 
            {
                colonCancerWoman: "true",
        },
        frequency: {
            repeatEvery: 10,
            startYear: 50,
            endYear: 75, 
            }
        },

        { testAnchor:"colonoscopy75+", 
        conditions: 
            {
                colonCancerMan: "true",
          
        },
        frequency: {
            repeatEvery: 10,
            startYear: 75,
            endYear: 90, 
            }
        },

        { testAnchor:"colonoscopy75+", 
        conditions: 
            {
                colonCancerWoman: "true",
        },
        frequency: {
            repeatEvery: 10,
            startYear: 75,
            endYear: 90, 
            }
        },

        { testAnchor:"colonoscopy40+", 
        conditions: 
            {
                colonCancerDetails: "lessthan60",
        },
        frequency: {
            repeatEvery: 5,
            startYear: 40,
            endYear: 75,
            
            }
        },
        { testAnchor:"colonoscopy40+", 
        conditions: 
            {
                colonCancerDetails: "manyRelatives",
        },
        frequency: {
            repeatEvery: 5,
            startYear: 40,
            endYear: 75,
            
            }
        },
        { testAnchor:"colonoscopy40+", 
        conditions: 
            {
                colonCancerDetails: "over60",
        },
        frequency: {
            repeatEvery: 10,
            startYear: 40,
            endYear: 75,
            
            }
        },

        { testAnchor:"colonoscopy40+", 
        conditions: 
            {
                colonCancerDetails: "manyCousins",
        },
        frequency: {
            repeatEvery: 10,
            startYear: 40,
            endYear: 75,
            
            }
        },

        { testAnchor:"FOBT", 
        conditions: 
            {   
        },
        frequency: {
            repeatEvery: 10,
            startYear: 45,
            endYear: 75,
            
            }
        },

        { testAnchor:"HPV", 
        conditions: 
            {   
                gender: "woman"
        },
        frequency: {
            oneTime: 18,
            }
        },
        { testAnchor:"herpesVaccine", 
        conditions: 
            {   
        },
        frequency: {
            oneTime: 50,
            }
        },
        { testAnchor:"pneumococcus", 
        conditions: 
            {   
        },
        frequency: {
            oneTime: 60,
            }
        },
        {testAnchor:"melanoma", 
        conditions: {melanomaMan: "true"},
        frequency: {repeatEvery: 1}},

        {testAnchor:"melanoma", 
        conditions: {melanomaWoman: "true"},
        frequency: {repeatEvery: 1}},

        {testAnchor:"dispancer", 
        conditions: {},
        frequency: {repeatEvery: 3, endYear: 45}},

        {testAnchor:"dantist", 
        conditions: {},
        frequency: {repeatEvery: 2, endYear: 65}},

        {testAnchor:"vitaminD", 
        conditions: {},
        frequency: {oneTime: 18}},
   ]; 

const countResultsModule = (survey) => {
  
    var surveyObj = JSON.parse(survey);
    var tests = [];


   Object.values(surveyObj).forEach(function (key) {
        switch (typeof(key)) {
            case "object":  break;
            default: break;
        }
   })

    testlogic.forEach(function (element) {

        var isChecked = true;
        var conditions = element.conditions;

        var comparisons = {
            '<': function(a, b) {return a < b},
            '>': function(a, b) {return a > b}
        }

       
     
         Object.entries(conditions).forEach(function (key) {
             //  var dividedString = returnOperator(key[1])
                
            if(typeof(surveyObj[key[0]]) == "object") {
                switch(typeof(key[1])) {
                    case "object":   
                    if(comparisons[key[1][0]](key[1][1], surveyObj[key[0][0]])) {isChecked = false}; 
                    break;
    
                    case "string":
                    if(conditions[key[0]] !== surveyObj[key[0]].toString()) {isChecked = false;}; break;
                    default: break;
                   } 
            }

            if(typeof(surveyObj[key[0]]) == "string" || typeof(surveyObj[key[0]]) == "undefined" || typeof(surveyObj[key[0]]) == "number" ) {
                switch(typeof(key[1])) {
                    case "object":   
                    if(comparisons[key[1][0]](key[1][1], surveyObj[key[0]])) {isChecked = false}; 
                    break;
    
                    case "string": 
                    if(conditions[key[0]] !== surveyObj[key[0]]) {isChecked = false;}; break;
                    default: break;
                   } 
            }

              
         })

        if(isChecked){
            tests.push({ testAnchor: element.testAnchor, years: countFreq(surveyObj, element.frequency), description: element.description, importanceDesc: element.importanceDesc}); 
        } 
     })

    // if (surveyObj.gender == "man" && surveyObj.age === "60") {
    //   tests.push({ testName: "brainTest", years: countFreq(surveyObj, 3) });
    // }
  
    // if (surveyObj.gender == "man" && surveyObj.age === "60") {
    //   tests.push({ testName: "heartTest", years: countFreq(surveyObj, 10) });
    // }
  
    return tests;
  };

  const countFreq = (surveyObj, freq) => {
    var yearsArray = [];
    var readyArray = [];

    freq.startYear = freq.startYear + getRandomInt(1);

    const currentYear = new Date().getFullYear();
    var age = 18;
    
    if (typeof(surveyObj.age) == "number") {
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
                    readyArray.push(element)}};
            
            if(typeof freq.startYear == 'undefined' && typeof freq.endYear !== 'undefined' ) {
                if (element % freq.repeatEvery == 0 && element < (birthYear+freq.endYear)) {
                    readyArray.push(element)}}        
            
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

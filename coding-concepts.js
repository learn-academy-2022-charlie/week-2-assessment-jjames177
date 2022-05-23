// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
// console.log(cohort.split(""))

// a) Your answer: I believe that when I console.log problem one, the expected outcome is going to be that "Bravo 2022" will be separated individually.
// b) Verify and explain: After I used console.log I was correct that the expected outcome will be separated individually due to the .split("")
// 'B', 'r', 'a', 'v',
//   'o', ' ', '2', '0',
//   '2', '2'

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: I believe it will be undefined because there is no return in the code.
// b) Verify and explain: Every function needs a return so its data can be used outside of the function. If you dont have a return you will get undefined when you console.log


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: I predict that the outcome is going to be every number will be multiplied by 2. 
// b) Verify and explain: I was correct in my prediction because you can see in the code .map() will change the values at each of the indexes in the array from before. The values were multiplied at each index by two and was returned an array with the values of [ 8, 10, 12, 14, 16 ]


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: I predict that the output of this code is going to be only odd numbers based on my understanding of the code. 
// b) Verify and explain: I was correct because the .filter method is used as an iterator. .map is going to iterate through each portion of the code to meet the conditional statement. The values that pass will be returned in a new array


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: It will return the JavasScript.    
// b) Verify and explain: I was correct in my answer because JavaScript is the the first index which starts at zero.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: This will return class Learn with "George" which is the students name, "Bravo" for the cohort, and the year 2022.
// b) Verify and explain: I was correct in my answer Learn { student: 'George', cohort: 'Bravo', year: 2022 }. On line 72, new will create a new instance for the class Learn, and will add "George" for the students name.

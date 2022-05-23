// ASSESSMENT 2: Coding Practical Questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.


describe("divBy3", () => {
    it("decides if the number is evenly divisible by three or not", () => {
        const num1 = 15
        // Expected outcome: "15 is divisible by three"
        const num2 = 0 
        // Expected output: "0 is divisible by three"
        const num3 = -7
        // Expected output: "-7 is not divisible by three"
        expect(divBy3(num1)).toEqual("15 is divisible by three")
        expect(divBy3(num2)).toEqual("0 is divisible by three")
        expect(divBy3(num3)).toEqual("-7 is not divisible by three")
    })
})

// I ran the test by inputting yarn jest into the terminal
// I got red on the first test (good failure)
// FAIL  ./code-challenges.test.js
// divBy3
// ✕ decides if the number is evenly divisible by three or not
// ReferenceError: divBy3 is not defined


// b) Create the function that makes the test pass.

// -Psuedo Code-
// Create a function named divBy3
// divBy3 will take a number as an argument in the code
// checking to see if the number is evenly divisible by 3
// function will have a conditional if/else statement which will use num % 3 === 0
// will return a string if true, which will state "is divisible by three"
// will return a string if false, which will state " is not divisible by three"

const divBy3 = (number) => {
    if (number % 3 === 0) {
        return `${number} is divisible by three`
    } else {
        return `${number} is not divisible by three`
    }
}

// after running the test I received PASS
// PASS  ./code-challenges.test.js
// divBy3
    // ✓ decides if the number is evenly divisible by three or not


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("cap", () => {
    it("returns an array with all the words capitalized", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
        expect(cap(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(cap(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})

// I ran the test by inputting yarn jest into the terminal
// I got red on the first test (good failure)
// FAIL  ./code-challenges.test.js
// cap
    // ✕ returns an array with all the words capitalized (1 ms)
// ReferenceError: cap is not defined

    // b) Create the function that makes the test pass.

// -Psuedo Code-
// Create a function named cap
// The function should return an array with every single word being capitalized
// Higher order function 
// I will use .map method which will filter through the array
// I will use .chartAt to isolate the index I want to capitalize of each string which will be 0 
// I will also use the .toUpperCase method so the function will return the string in the array as uppercase
// I will use a built in method .slice

const cap = (array) => {
    return array.map(value => {
        return value.charAt(0).toUpperCase() + value.slice(1)
    })
}

// after running the test I received PASS
// PASS  ./code-challenges.test.js
//cap
// ✓ returns an array with all the words capitalized (2 ms)

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.


// a) Create a test with expect statements for each of the variables provided.

describe("fVowel", () => {
    it("returns the index of the first vowel", () => {
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2
        expect(fVowel(vowelTester1)).toEqual([1])
        expect(fVowel(vowelTester2)).toEqual([0])
        expect(fVowel(vowelTester3)).toEqual([2])
    })
})

// I ran the test by inputting yarn jest into the terminal
// I got red on the first test (good failure)
// FAIL  ./code-challenges.test.js
//fVowel
// ✕ returns the index of the first vowel (1 ms)
//ReferenceError: fVowel is not defined

// b) Create the function that makes the test pass.

// -Psuedo Code-
// I need to create a function named fVowel
// fVowel will needs to iterate through all the letters in the given string
// I will use a for loop which contains an if statement that will give me a vowel at every index
// 




const fVowel = (string) => {
    for(let i = 0; i < string.length; i++){
        if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u"){
            return [i]
        }
    }
}

// after running the test I received PASS
// PASS  ./code-challenges.test.js
// fVowel
// ✓ returns the index of the first vowel (2 ms)
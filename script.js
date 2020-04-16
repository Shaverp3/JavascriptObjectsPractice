
// instantiate and assign the following variables with information about yourself:
// firstName should hold a string of your first name
// lastName should hold a string of your last name
// age should hold a number of your age
// likesTravel should hold a boolean representing whether or not you like to travel
// Log each variable to the console.

// var firstName = "Pat";
// var lastName = "Shaver";
// var age = 29;
// var likesTravel = true;

// console.log(firstName,lastName,age,likesTravel);


// Favorite Movies
// In your JavaScript file, instantiate and assign a variable called movieArray. This variable should hold an array of your favorite movie titles. (Don't go overboard- two or three is fine).
// Log each movie in the array to the console.

// var movieArray = ["Blast From the Past","Christmas Vacation"];

// console.log(movieArray[0]);
// console.log(movieArray[1]);

// Instead of storing the data from your first lightning exercise in separate variables, store them in an object. Your object should have a property of firstName, lastName, age, likesToTravel. It should also have a property called favoriteMovies, which should hold the array of your favorite movies you created in the last lightning exercise.

// var patObject = {
//     firstName: "Pat",
//     lastName: "Shaver",
//     age: 29,
//     likesToTravel: true,
//     favMoviesArray: ["Blast from the Past", "Christmas Vacation"]

// }

// console.log (patObject.age);
// console.log (patObject.favMoviesArray[0]);

// const wardrobe = {
//     height: 80,
//     manufacturer: "Killibrew & Sons",
//     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
//     depth: 38,
//     width: 50
// }

// console.log(wardrobe.height,wardrobe.manufacturer,wardrobe.contents[0], wardrobe.contents[1], wardrobe.depth, wardrobe.width)

// const empireStateBuilding = {
//     stories: 103,
//     height: 1453,
//     address: "350 Fifth Avenue, Manhattan, New York 10118",
//     squareFeet: 2768591,
//     constructionDate: 1931,
//     cost: 40948900,
//     owner: "Empire State Realty Trust",
//     eastWestLength: 424,
//     northSouthLength: 187,
//     architect: "Shreve, Lamb & Harmon"
// }
// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.
// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.

// console.log(empireStateBuilding.stories,empireStateBuilding.height,empireStateBuilding.squareFeet,empireStateBuilding.eastWestLength,empireStateBuilding.northSouthLength,)

// var address = "address"
// var constDate = "constructionDate"
// var owner = "owner"
// var architect = "architect"
// var taco = "cost"

// console.log(empireStateBuilding[address])
// console.log(empireStateBuilding[constDate])
// console.log(empireStateBuilding[owner])
// console.log(empireStateBuilding[architect])
// console.log(empireStateBuilding[taco])



// var dadObject ={
//     firstName: "Pat",
//     lastName: "Shaver",
//     age: 58
// }
// var momObject ={
//     firstName: "Marylin",
//     lastName: "McKeown",
//     age: 56
// }
// var firstChildObject ={
//     firstName: "Rain",
//     lastName: "McKeown",
//     age: 7
// }
// var secondChildObject ={
//     firstName: "Charlotte",
//     lastName: "Shaver",
//     age: 5
// }

// var familyMembers =[dadObject,momObject,firstChildObject,secondChildObject]

// console.log(familyMembers[0])

// const nashvilleSoftwareSchool = {
//     founded: 2012,
//     director: "John Wark",
//     instructors: {
//         fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
//         partTime: ["Zoe", "Nathan"]
//     },
//     address: "500 Interstate Blvd. S"
// }

// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.
// var partTime = nashvilleSoftwareSchool.instructors.partTime
// var fullTime = nashvilleSoftwareSchool.instructors.fullTime

// for (i = 0; i < partTime.length; i++){
//     console.log(partTime[i])
// }
// for (i =0; i < fullTime.length; i++){
//     console.log(fullTime[i])
// }

// Lightning Exercise 2: Output only Andy and Zoe in the console.

// console.log(fullTime[4])
// console.log(partTime[0])


// const beatles = {
//     albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
//     history: {
//         formed: 1960,
//         disbanded: 1970
//     },
//     members: [
//         {
//             name: "George Harrison",
//             birth: 1943,
//             death: 2001
//         },
//         {
//             name: "Paul McCartney",
//             birth: 1942,
//             death: null
//         },
//         {
//             name: "John Lennon",
//             birth: 1940,
//             death: 1980
//         },
//         {
//             name: "Ringo Starr",
//             birth: 1940,
//             death: null
//         }
//     ]
// }

// Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.

// console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album.`)


// In your JavaScript file, declare a new variable called likesToTravel and set it equal to true or false.
// If likesToTravel is true, log "Bon voyage!" to the console. If not, log "Enjoy your couch!" to the console.

var likesToTravel = true

if(likesToTravel === true){
    console.log("Bon voyage!")
} else{
    console.log("Enjoy your couch!")
}

// Fried Pickles are the Best
// In your JavaScript file, declare a new variable called favoriteFood and set it equal to your favorite food.
// Write a conditional that checks to see if the favoriteFood variable is equal to "fried pickles" OR "pepperoni rolls". If so, log "Congratulations! You have excellent taste!" to the console. Otherwise, log "Clearly you have not tried fried pickles or pepperoni rolls." to the console.

var favoriteFood = "tacos"

if (favoriteFood === "fried pickles"||favoriteFood === "pepperoni rolls"){
    console.log("Congratulations! You have excellent taste!")
} else {
    console.log("Clearly you have not tried fried pickles or pepperoni rolls.")
}


// Psychotic Bird
// In your JavaScript file, write a while loop that outputs the phrase "TWEET TWEET" 100 times to the console.


// for (var i = 0; i <100;i++){
//     console.log("TWEET TWEET")
// }

// Days of the Week
// In your JavaScript, create a new variable called weekArray. It should store an array of strings representing seven days of the week
// Loop through the array and print each day to the console.

// var weekArray = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"]

// for(var i=0;i<weekArray.length;i++){
//     console.log(weekArray[i])
// }

var piggyBank = {
    quarters: 14,
    nickels: 35,
    dimes: 40,
    pennies: 132
}

// console.log(piggyBank.quarters)

var dollarAmount = 0;

dollarAmount = dollarAmount + (piggyBank.quarters * 0.25) + (piggyBank.nickels * .05) + (piggyBank.dimes * .10) + (piggyBank.pennies * .01)

console.log(dollarAmount)
"use strict";
// ==========TypeScript All 45 Questions Solved Excercise ================//
// ========================================  Ex # 1   =========================================================//
// To install node.js, git bash, typescript & Vs code run 1st programme in typescript
// console.log("hello & bye World!");
// =========================================   Ex # 2   ======================================================//
//  let personName : string = "Alex"
//  let message : string = `Hello ${personName},would you like to learn  some Python today?`
//  console.log(message)
//=================================================   Ex # 3  ==================================================//
//  let personName: string ="Imran khan niazi";
// // Step 1 show in lower case:
// let lowerCaseName: string = personName.toLowerCase();
// console.log(lowerCaseName)
// // Step 2 show in uppercase:
// let uppercaseName: string = personName.toUpperCase();
// console.log(uppercaseName)
// // Step 3 show in titlecase:
// let words: string[] = personName.split(" ");
// let titlecaseName: string = ""
// for (let i = 0; i < words.length; i++) {
// titlecaseName +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+" "};
// console.log(titlecaseName)
//===========================================  Ex # 4  ======================================================//
// // console.log('Once Abdul Sattar Edhi Said, "Empty words and long praises do not impress God! Show Him your faith by your deeds."')
// let famous_person: string ="Abdul Sattar Edhi";
// let message: string = famous_person + 'Once  Abdul Sattar Edhi Said, "Empty words and long praises do not impress God! Show Him your faith by your deeds."'
// console.log(message);
//==========================================  Ex # 5  ========================================================//
// let famous_person: string = " Abdul Sattar Edhi"; 
// let message: string = famous_person + '"Once  Abdul Sattar Edhi Said, "Empty words and long praises do not impress God! Show Him your faith by your deeds"'
// console.log(message);
//==========================================  Ex # 6  =======================================================//
// let personName: string ="\t Imran Khan \n";
// console.log("Name with whitespace:",personName)
// let strippedName: string = personName.trim()
// console.log("stripped name:", strippedName)
//==============================================  Ex # 7  ===================================================//
// // Addition :
// const additionResult = 5 + 5;
// console.log("Addition Result:" + additionResult)
// // Subtraction :
// const subtractionResult = 30 - 20 ;
// console.log("Subtraction Results: " + subtractionResult)
// // Multiplication :
// const MultiplicationResult = 5 * 2 ;
// console.log("multiplication Results: "+ MultiplicationResult)
// // Division :
// const DivisionResult = 50 / 5 ;
// console.log("Division Results: "+ DivisionResult)
//==============================================  Ex # 8  =====================================================//
// console.log("-".repeat(80))
// console.log(5 + 3)
// console.log("_".repeat(80))
// console.log(16 - 8)
// console.log("_".repeat(80))
// console.log(4 * 2)
// console.log("=".repeat(80))
// console.log(16 / 2)
// console.log("-".repeat(80))
//============================================   Ex # 9  ====================================================//
// let favoriteNumber: number = 5
// let message: string = `My favorite number is ${favoriteNumber}`
// console.log(message)
//=========================================   Ex # 10  ====================================================//
// Excercise 10
// My Name Is Zeenat Khan
// Dated: 15/02/2024
// Simple program will run simple code
// console.log('I am learning programming language');
// Excercise 10
// My Name Is Zeenat Khan
// Dated: 15/02/2024
// Simple Multiplication program
// console.log(5 * 2);
//=============================================  Ex # 11  =================================================//
// let names: string[]=['Lubna', 'Zainab', 'Lisa', 'Eric'];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
//===========================================   Ex # 12  ===================================================//
// let names: string[]=['Lubna', 'Zainab', 'Lisa', 'Eric'];
// // Loop through each name in the array
// for (let name of names) {
//     // print a personalize message for each friend
//     console.log(`Good Morning ${name}, Lets make a plan to have a meet up!`)}
//==============================================   Ex # 13  ================================================//
//     let favoritetransportation: Array<[transport: string, brand: string]> = []
// favoritetransportation.push(["Sports Bike", "Ducati"])
// favoritetransportation.push(["Car", "Audi"])
// favoritetransportation.push(["Bicycle", "Pinarello"])
// // console.log(favoritetransportation)
// // I would like to own Audi Car.
// // Using for each loop to print a series of statements
// favoritetransportation.forEach(([transport, brand]) => {console.log(`I would like to own ${brand} ${transport}.`) }
// )
//=============================================  Ex # 14  =================================================//
// let guestList: Array<string> = [
//     "Sir Zia Khan",
//     "Miss Hina",
//     "Sir Babar",
//     "Sir Qasim",
//     "Founder Quaid I Azam",
//     "Sir Abdul Sattar Edhi ",
//     "Imran Khan"
// ];
// // Loop for each to print invitation
// guestList.forEach((guestName) => 
// {
//     console.log(`Respected ${guestName}, You are invited in dinner it would be pleasure to host you. `)
//=============================================   Ex # 15  ===============================================//
//     let guestList: Array<string> = [
//         "Sir Zia Khan",
//         "Miss Hina",
//         "Sir Babar",
//         "Sir Qasim",
//         "Founder Quaid I Azam",
//         "Sir Abdul Sattar Edhi ",
//         "Imran Khan"
//     ];
//     //  Step 1. print the name of the person who can't make it.
//     let guestHowCantMakeit: string = "Founder Quaid I Azam"
//     console.log(`${guestHowCantMakeit} can't make it to Dinner`)
//     //  Step 2. Replace the name of guest who can't make it.
//     let NewGuest: string = "Shahid Afridi"
//     let indexOfguestHowCantMakeIt: number = guestList.indexOf(guestHowCantMakeit)
//     // console.log(indexOfguestHowCantMakeIt)
//     if (indexOfguestHowCantMakeIt !== - 1)
//      {
//      guestList[indexOfguestHowCantMakeIt] =NewGuest
//      }
//     //  console.log(guestList[4])
//     // Step 3.Print a second set of invitation messages
//     console.log("second set of invitation messages:")
//     guestList.forEach((guest:string) => {
//         console.log(`Respected ${guest}, You are invited in Dinner.`)
//     })
//     export{guestList}
//==========================================   Ex # 16  ==================================================//
//     let guestList: Array<string> = [
//         "Sir Zia Khan",
//         "Miss Hina",
//         "Sir Babar",
//         "Sir Qasim",
//         "Founder Quaid I Azam",
//         "Sir Abdul Sattar Edhi ",
//         "Imran Khan"
//     ];
//    
//     // Step 1 informing people that you found a bigger dinner table.
//     for (let guest of guestList) {
//         console.log(`Hey, ${guest}, we found a bigger dinner table.`)
//     }
//     // Step 2 Add a new guest to the beginning of Array.
//     let newGuestAtBeginning: string = "Alisa"
//     guestList.unshift(newGuestAtBeginning)
//     console.log(guestList)
//     // Step 3 Add one guest to the middle of Array.
//     let newguestinmiddle: string = "Amal Khan"
//     let middleindex: number = Math.floor(guestList.length/2)
//     guestList.splice(middleindex, 0, newguestinmiddle)
//     // console.log(guestList)
//     //  Step 4 Use append()to add new guest to the end of your list.
//     let newGuestAtEnd: string = "Zaroon Khan"
//     guestList.push(newGuestAtEnd)
//     // console.log(guestList)
//     // Step 5 Print a new set of invitation messages.
//      console.log("New set of invitation messages:")
//      for(let guest of guestList)
//      {
//         console.log(`Respected ${guest}, You are invited in dinner.`)
//      }
//      console.log(guestList)
//=========================================  Ex # 17  =====================================================//
//    let guestList: Array<string> = [
//     'Alisa',
//     'Sir Zia Khan',
//     'Miss Hina',
//     'Sir Babar',
//     'Amal Khan',
//     'Sir Qasim',
//     'Founder Quaid I Azam',
//     'Sir Abdul Sattar Edhi ',
//     'Imran Khan',
//     'Zaroon Khan'
//   ]
// //   Message about inviting only two people.
// console.log(`I can invite only two people for dinner`)
// //  Step 2 Remove guest from the list until only two name remain.
// while(guestList.length > 2) 
// {
// let removeGuest = guestList.pop()
// console.log(`Sorry, ${removeGuest}, I can't invite you in dinner`);
// }
// //  Part 3 Print a message to each of the two people still on your list, letting them know they're still invited.
// for (let guest of guestList) {
//     console.log(`Hey, ${guest}, You are still invited in dinner!`)
// }
// //  Part 4:Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// guestList.pop()
// guestList.pop()
// // print empty string
// console.log(`guest list after dinner`, guestList)}
//============================================   Ex # 18  =================================================//
//  // Step 1: Create an Array to store Travel destinations.
// let travelDestinations: string[] = ["Switzerland", "Newzealand", "Finland", "Poland", "Turkey"]
// // Step 2: Print your Array in its original order
// console.log("Original Order")
// console.log(travelDestinations)
// // Step 3: Print your Array in alphabetical order without modifying the actual list.
// console.log("\n Alphabetical order without modifying the actual list") 
// console.log([...travelDestinations].sort())
// // Step 4: Show that your Array is still in its original order by printing it again.
// console.log("\n Showing Array is still in its original order by printing it again")
// console.log(travelDestinations)
// // Step 5: Print your Array in reverse alphabetical order without changing the order of the original list.
// console.log("\n Reverse Alphabetical order without modifying the actual list") 
// console.log([...travelDestinations].sort().reverse())
// // Step 6: Show that your Array is still in its original order by printing it again.
// console.log("\n Showing Array is still in its original order by printing it again")
// console.log(travelDestinations)
// // Step 7: Reverse the order of your list.Print the Array to show that its order has changed.
// console.log("\n Reverse Order")
// travelDestinations.reverse()
// console.log(travelDestinations)
// // Step 8: Reverse the order of your list again. Print the list to show its back to its original order.
// console.log("\n Back to Original")
// travelDestinations.reverse()
// console.log(travelDestinations)
// // Step 9: Sort your Array so its stored in alphabetical order. Print the Array to show that its order has been changed.
// console.log("\nChange to Alphabetical order ")
// travelDestinations.sort()
// console.log(travelDestinations)
// // Step 10: Sort to change  your array so its stored in reverse alphabetical order. Print the list to show that its  order has changed.
// console.log("\nChange to Reverse Alphabetical order ")
// travelDestinations.sort().reverse()
// console.log(travelDestinations)
//===========================================   Ex # 19  ==================================================//
////Importing  Guests List from Ex # 14
// import{ guestList } from '../Excercise 14'
// console.log(`\nPrinting message indicating number of guests`)
// console.log(`We had finally invited ${guestList.length} guest in Excercise 14.`)
//=============================================  Ex # 20  =================================================//
// const countries: string[] = ["USA","PAKISTAN", "AUSTRALIA", "JAPAN",  "CHINA"]
// console.log("List of countries:") 
// for( let country of countries)
// {
// console.log(country)
// }
//=============================================   Ex # 21  =================================================//
/* They think of something you could store in a Typescript Object. Write a program that creates Objects containing these items.*/
// const smartphone =
// {
//    name: "oppo ", 
//    price: 35000,
//    description: "High Quality camera performance powerful big battery"
// }
// // define an Array of objects
// let smartphones: Array<typeof smartphone> = [];
// // pushing  multiple object
// smartphones.push(smartphone);
// smartphones.push({
//    name: "vivo",
//    price: 40000,
//    description: "amoled dispaly fastest snapdragon gen1 processor"
// })
// let smartphone3 =
//  {
//       name: "Infinix ", 
//       price: 25000,
//       description: "High Quality dispaly and features"
// }
// smartphones.push(smartphone3);
// // console.log(smartphones);
// smartphones.push({ name:"OnePlus",
//  price:150000,
//  description: "Beast in gaming powerful battery with 4K recording HD cameras"
// });
// // console.log(smartphones);
// // fuction to display smartphones
// function dispalysmartphones(smartphones: Array<typeof smartphone>){
//    for(let i of smartphones)
//    {
//       console.log(`
//       title: ${i.name}
//       description:${i.description}
//       price: ${i.price}
//       _______________\n`);
//    }
// }
// dispalysmartphones(smartphones);
//=========================================   Ex # 22 & 23  ================================================//
//  Ex # 22
/* Intentional Error: If you haven't received an Array Index error in one of your programs yet,try to make one happen. Change  an index in one your programs to programs  to an  index error . Make sure you correct the error before closing the program.*/
// //  function  to create a fruit object 
// function createFruit(name: string, color: string, taste: string) {
//     return {
//         name,
//         color,
//         taste, 
//     };
// }
//  const fruits = [
//     createFruit("Mango", "Yellow", "Sweet"),
//     createFruit("Strawberry", "Pink", "Sweet"),
//     createFruit("Orange", "Orange", "Citrusy"),
//     createFruit("Cherry", "Red", "Citrusy"),
// ];
// // Access an invalid index 
// const invalidIndex = 10; //there are only 5
// console.log (`Fruit at index ${invalidIndex}:`, fruits[invalidIndex]);
// // Print the fruits 
// fruits.forEach((fruits) => {
//     console.log(`Name: ${fruits.name}, Color: ${fruits.color}, Taste: ${fruits.taste}`); 
// });
// export{};
// Ex # 23
// let car ='Subaru';
// console.log("Is car =='Subaru'? I predict True."); 
// console.log(car == 'Subaru');  //True
// console.log("Is car == 'honda'? I  predict False.");
// console.log(car == 'honda'); //False
// console.log("Is car === 'Subaru'? I predict True.");
// console.log(car === 'Subaru');//True
// console.log("Is car ==='Subaru'? I predict False.");
// console.log(car === 'Subaru'); //False
// console.log("Is car !=='toyota'? I predict True.");
// console.log(car!=='toyota');//True
// console.log("Is car!=='Subaru'? I predict False.");
// console.log(car !=='Subaru');//False
// console.log("Is car != 'mazda'? I predict True.");
// console.log(car != 'mazda');//True
// console.log("Is car != 'Subaru'? I predict False.");
// console.log(car != ' Subaru'); //false
// let age  = 25;
// console.log("Is age > 18? I predict True.");
// console.log(age > 18); //True
// console.log("Is age< 21? I predict False.");
// console.log(age<21); //False
//==============================================   Ex # 24  =================================================//
// const str1: string = "Hello";
// const str2: string  = "hello";
// console.log(str1 === str2); //false
// console.log(str1 !== str2);//true
// //Test using the lowercase function
// const text1: string = "Hello World";
// const text2: string = "hello world";
// console.log (text1.toLowerCase() ===text2); //true
// const num1: number = 10;
// const num2: number = 5;
// console.log(num1 === num2); //false
// console.log(num1 !== num2); //true
// console.log(num1 > num2);//true
// console.log(num1 < num2);//false
// console.log(num1 >= num2);//true
// console.log(num1 <= num2);//false
// //tests using "and and "or" operators
// const x: number = 5;
// const y: number = 10;
// const z: number = 15;
// console.log(x < y && y < z);//true,both conditions are true 
// console.log(x < y || y > z);// true, at least one condition is true
// console.log(x > y && y < z); // false, both conditions are false
// console.log(x > y || y > z); // false, both conditions are false
// //test whether an item is in an array
// const fruits: string [] = ['mango', 'strawberry','orange','cherry'];
// console.log(fruits.includes('mango'));//true
// console.log(fruits.includes('pomegranate')); //false
// //test whether an item is not in an array
// const colors: string[] = ['red','green','blue','yellow'];
// console.log(!colors.includes('purple'));//true
// console.log(!colors.includes('blue'));//false
//============================================   Ex # 25  ===================================================//
//  let alien_color = 'green'
// if (alien_color == 'green') {
// console.log("congratulation! You just earned 5 points.") 
// }
// //second version
// alien_color = 'blue'
//  if (alien_color == 'green'){
//     console.log("Congratulations! You just earned 5 points")
//  }
//============================================   Ex # 26  ===================================================//
//version 1 (runs the if block)
// console.log('\n1st version of code')
// let alien_color: string  = 'green' ;
// if (alien_color === 'green') {
//     console.log('Congratualtion! you just earned 5 points for shooting the alien.');
// } else {
//     console.log('Congratualtion! you just earned 10 points for shooting the alien.');
// }
// //version 2 (runs the else block.)
// console.log('\n2nd version of code')
// alien_color = 'blue';
// if(alien_color === 'green') {
//     console.log('Congratualtion! you just earned 5 points for shooting the alien.');
// } else {
//     console.log('Congratualtion! you just earned 10 points for shooting the alien.');
// }
// export{};
//==============================================  Ex # 27  ===================================================//
// version 1 where alien color is green
// console.log(`version 1 where alien color is green`)
// let alien_color: string = 'green';
// if (alien_color === 'green'){
//     console.log('Congratulation! You just earned 5 points.');
// } else if (alien_color === 'yellow') {
//     console.log('Congratulation! You just earned 10 points.');
// } else if (alien_color === 'red') {
//     console.log('Congratulation! You just earned 15 points.');
// } else {
//    console.log('Unknown alien color.');
// }
// // version 2 where alein color is yellow
// console.log(`version 2 where alien color is yellow`)
// alien_color = 'yellow';
// if (alien_color ==='green')
// {
// console.log('Congratulation! You just earned 5 points.');
// }
// else if(alien_color ==='yellow')
// {
//    console.log('Congratulation! You just earned 10 points.'); 
// }
// else if(alien_color ==='red') {
//   console.log('Congratulation! You just earned 15 points.');   
// } else{
//   console.log ('Unknown alien color.'); 
// }
// //version 3 where alien color is red
//  console.log(`version 3 where alien color is red.`)
// alien_color = 'red';
// if(alien_color ==='green'){
//  console.log ('Congratulations! You just earned 5 points.');  
// }else if(alien_color ==='yellow'){
//     console.log('Congratulations! You just earned 10 points.');  
// }
// else if(alien_color ==='red'){
//     console.log('Congratulations! You just earned 15 points.');  
// } else{
//     console.log('Unkown alien color');
// }
//============================================  Ex # 28  ====================================================//
// let age : number = 25;
// // less than 2 years old, print a message that the person is a baby.
// if(age < 2) {
//   console.log("The person is a baby.");  
// } else if(age < 4) {
//     console.log("The person is a toddler.");
// }else if(age < 13) {
//     console.log("The person is a kid.");
// } else if( age < 20) {
//     console.log("The person is a teenager.");
// } else if(age < 65) {
//     console.log("The person is an adult.");
// } else {
//     console.log("The person is an elder.");
// }
// //to test with different age.
// console.log(`2 condition to test with different age.`)
// age = 12
// if(age < 2) {
//     console.log(`Age is ${age}, The person is a baby.`);  
//   } else if(age < 4) {
//       console.log(`Age is ${age}, The person is a toddler.`);
//   }else if(age < 13) {
//       console.log(`Age is ${age} ,The person is a kid.`);
//   } else if( age < 20) {
//       console.log(`Age is ${age}, The person is a teenager.`);
//   } else if(age < 65) {
//       console.log(`Age is ${age}, The person is an adult.`);
//   } else {
//       console.log(`Age is ${age}, The person is an elder.`);
//   }
//===============================================  Ex # 29  =================================================//
// //Define the Array of Fruits
// const favorite_Fruits: string[] =["Mango", "Cherry", "Orange"];
// ///syntax: ArrayName.includes("element")
// //Check for specfic fruits using independent if statements
// if(favorite_Fruits.includes("Mango")){
//     console.log("Mango is my Favorite fruit!");
// }
// if(favorite_Fruits.includes("Cherry")) {
//     console.log("I like Cherries!");
// }
// if(favorite_Fruits.includes("Orange")) {
//     console.log("Oranges are tangy!");
// }
// if(favorite_Fruits.includes("Strawberry")) {
//     console.log("Strawberry are delicious!");
// }
//===========================================   Ex # 30   ===================================================//
// const userNames: string[] = ['admin', 'Lubna', 'Alisa', 'Zainab', 'Amal Khan'];
// function greetUser(): void {
//     for (const i in userNames) {
//         if (userNames[i].toLowerCase() === 'admin') {
//          console.log(`Hey admin, would you like to see a status reports?.`);  
//         } else {
//             console.log(`Hello ${userNames[i]}, Thank you for logging in again.`);
//         }
//     }
// }
// greetUser()
//==============================================   Ex # 31   ===================================================//
// //Empty Array case
// const emptyUserNames: string[] = [];
// //Non Empty Array Case
// let UserNames: string[] = [
//     'admin', 'Lubna', 'Alisa', 'Zainab', 'Amal Khan'
// ];
// //functional case
// function greetUsers(usernames: string[]): void {
//   if (usernames.length === 0) {
//     console.log('We need to find 4 users!');
//     return;
//   } 
// for (const username of usernames){
//     if(username.toLowerCase() === 'admin') {
//         console.log('Hey admin, would you like to see a status repor?');
//     } else {
//         console.log(`Hello ${username},Thank You for logging in again.`);
//     }  
//   }
// }
// console.log(`For non empty username:\n`)
// greetUsers(UserNames);
// //To make Array empty we just assign an empty Array to us
// UserNames = [];
// console.log(`\n\n For empty username:\n`)
// greetUsers(UserNames);
// export{};
//=============================================   Ex # 32  ===================================================//
// const current_users: string[] = ["Lubna", "Alisa", "Zainab", "Amal Khan", "Ayat Khan", "Ansha"];
// const new_users: string[] = ["Jiya", "Imran Khan", "Lubna", "Zia Khan", "Ansha"];
// /*/.map example to understand mathematical concept
// const num1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(num1)
// const num2: number[] = num1.map(i => i ** 2)
// console.log(num2)*/
// //Step 2 Function 
// function checkUserNames(current_users: string[], new_users: string[]): void  
// {
//     // 1st step of function
//     const lowercasedCurrentUsers = current_users.map(user => user.toLowerCase());
// }
//     //2nd step of function
//      for(const newUser of new_users) {
//       const lowercasedNewUsers = newUser.toLowerCase(); 
//       if (lowercasedNewUsers.includes(lowercasedNewUsers)) {
//     console.log(`Username"${newUser}" is already taken Please enter a new username.`);
//        } else {
//         console.log(`Username "${newUser}" is available.`);
//        }
//     }
//     console.log(current_users)
//     //Test the  function
//     checkUserNames(current_users,new_users);
//=============================================   Ex # 33  ====================================================//
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (const number of numbers) {
//     let ordinal: string;
//     if (number === 1) {
//         ordinal ="st";
//     } else if (number === 2) {
//         ordinal ="nd";
//     } else if (number === 3) {
//         ordinal = "rd";
//     } else {
//         ordinal = "th";
//     }
//     console.log(`${number}${ordinal}`);
// }
//================================================   Ex # 34  =================================================//
//Define the Array of favorite pizzas
// const favoritePizzas = ['Spicy pepperoni', 'Chicken Tikka', 'Fajita'];
// //print the name of each pizza using a for loop
// console.log("My favorite pizzas are:");
// for(let i = 0; i < favoritePizzas.length; i++) {
//     console.log(favoritePizzas[i]);
// }
// //print a sentence for each pizza
// console.log("\nI like these pizzas:");
// for (let i = 0; i < favoritePizzas.length; i++) {
//     console.log(`I like ${favoritePizzas[i]} pizza.`);
// }
// //print an additional sentence about how much I like pizza
// console.log(`\nI really love pizza!`);
//==============================================   Ex # 35  =================================================//
//List of animals with a commom characteristic
// const animals: string[] = ['cat', 'rabbit', 'goat'];
// // printing the names of each animals using for of loop
// console.log("List of animals:");
// for(const animal of animals ){
//     console.log(animal);
// }
// //print a statement about each animal
// console.log("\nStatement about each animal:");
// for(const animal of animals){
//     if (animal === 'rabbit') {
//         console.log(`A ${animal} is a playful pet.`);
//     } else if (animal === 'cat') {
//         console.log(`A ${animal} is a home friendly pet`);
//     } else if (animal === 'goat') {
//         console.log(`A ${animal} is an innocent pet that also give us milk.`);  
//     }
// }
// //Common Characteristic 
// console.log("\nWhat these animals have in common:");
// console.log("Any of these animals could be a great pet!");
//==============================================    Ex # 36   ==================================================//
// //Defining a function that accepts a size & the text of a message that should be printed on the Shirt.
// const make_shirt = (Size: string , Message: string): void =>
// {
//     console.log(`Size: ${Size}, Message: '${Message}'`);
// }
// //Call  the function with the size & the message variables
// let size: string  = "Small";
// let message: string = "Free Palestine"
// make_shirt(size, message);
// // directly call the function
// make_shirt("Medium", "Safe GAZA");
//==============================================   Ex # 37  =================================================//
// function makeShirt(Size: string = "Large", Message: string = "I love TypeScript"): void 
// {
//    return console.log(`Size: ${Size}, Message:'${Message}'`);
// }
// //Large shirt with default message 
// makeShirt();// output: Size: Large, Message: 'I love TypeScript'
// //Medium shirt with default message 
// makeShirt("Medium");// output: Size: Large, Message: 'I love TypeScript'
// //custom shirt with a different message & size
// makeShirt("Small", "Learn Skills & generate revenue in PAKISTAN!"); //Output; size, Small, Message: 'Hey, TypeScript!'
//============================================   Ex # 38  ==================================================//
// function decribe_city(city: string, country: string = "Unknown Country"): void {
//     console.log(`${city} is in ${country}.`);
// }
// //Calling the function for the three different cities
// decribe_city("Quetta", "Pakistan");
// decribe_city("Paris"); // using the default country value
// decribe_city("London", "England");
//================================================   Ex # 39  ===============================================//
//Arrow function
// const  city_country = (City: string, country: string): string =>
// {
//     return `${City}, ${country}`;
// }
// // test the function with  three city-country pairs
// console.log(city_country("Islamabad", "Pakistan"));
// console.log(city_country("Sydney", "Australia"));
// console.log(city_country("Kabul","Afghanistan"));
//============================================  Ex # 40  =================================================//
//Make at least 1 new function call that includes the number of tracks on an album.
// function make_album(artist: string, title: string, tracks?: number): { artist: string; title: string; tracks?: number} 
//    { const album = {artist,
//   title,
//   tracks,
//     };
//     if (tracks !== undefined)
//     {
//         album.tracks = tracks;
//     }
//     return album;
// } 
// //Example function calls
// const album1 = make_album('Sia', 'Reasonable Woman');
// const album2 = make_album('Sheryl Crow', 'Evolution', 10);
// const album3 = make_album('Arooj Aftab', 'Love in Exile', 5);
// console.log(album1);
// console.log(album2);
// console.log(album3);
//===============================================   Ex # 41  ================================================//
// //Array of magician's names
// const magicianNames: string[] = ["Harry Potter", "Chris Angel", "Professor Albus Dumbledore", "Hermione Granger", "Draco Malfoy"];
// function show_magicians(magicians: string[]): void {
//     for(const magician of magicians) {
//       console.log(magician);  
//     }
// }
// // Call the function to show the magician's names
// show_magicians(magicianNames);
//============================================   Ex # 42    ===================================================//
//Array of magician's names "Harry Po
// const magicianNames: string[] = ["Harry Potter", "Chris Angel", "Professor Albus Dumbledore", "Hermione Granger", "Draco Malfoy"];
// function showMagicians(magicians: string[]): void {
//     for(const magician of magicians) {
//         console.log(magician);
//     }
// }
// function make_great(magicians: string[]): string[] {
//     const greatMagicians: string[] = magicians.map(magician =>`The Great ${magician}`);
//     return greatMagicians;
// }
// //Modify the array to add "The Great" to all magician's name
// const greatMagiciansNames: string[] = make_great(magicianNames);
// // Call the function to show the original magician's names
// console.log("Original Magicians:");
// showMagicians(magicianNames);
// //Call the  function to show  y=the great magician's names
// console.log("Original Magicians:");
// showMagicians(greatMagiciansNames);
//==============================================   Ex # 43  ==================================================//
//Unchanged magicians: Array of magician's names 
// const magicianNames: string[] = ["Harry Potter", "Chris Angel", "Professor Albus Dumbledore", "Hermione Granger", "Draco Malfoy"];
// function showMagicians(magicians: string[]): void {
//     for(const magician of magicians) {
//         console.log(magician);
//     }
// }
// function make_great(magicians: string[]): string[] {
//     const greatMagicians: string[] = magicians.map(magician =>`The Great ${magician}`);
//     return greatMagicians;
// }
// //Modify the array to add "The Great" to all magician's name
// const greatMagiciansNames: string[] = make_great(magicianNames);
// // Call the function to show the original magician's names
// console.log("Original Magicians:");
// showMagicians(magicianNames);
// //Call the  function to show  y=the great magician's names
// console.log("Original Magicians:");
// showMagicians(greatMagiciansNames);
//===========================================   Ex # 44  ====================================================//
// function makesandwich(...items: string []): void {
//     console.log("Sandwich Summary:");
//     if (items.length === 0) {
//         console.log("  - You ordered an empty sandwich. Please add some items.");
//     } else {
//         items.forEach((item, index) => {
//             console.log(`  ${index + 1}. ${items}`);
//         });
//     }
//     console.log("\n");
// }
// //Call the function with different numbers of arguments
// makesandwich("Crispy Chicken", "Cabbages", "Mayonnaise", "Tomato", " Mint garlic chilli Sauce");
// makesandwich(" Spicy Chicken chunks", "Lettuce", "Cheese", "Mayonnaise");
// makesandwich("Cream", "Mango", "Chocolate Syrub");
//==========================================  Ex # 45  ===================================================//
// function createCar(manufacturer: string, model: string, ... properties: [string, any][]): any {
//     const car: any = {
//         manufacturer,
//         model,
//     };
//     for (const [key, value] of properties) {
//         car[key] = value;
//     }
//    return car;
// }
// // Example Usage:
// const myCar = createCar("Audi", "Audi A6", ["color", "black"], ["Optional Feature", "Automatic"], ["Safety Feauture", "Air Bags"]);
// console.log(myCar);

  // Guessing a game

//  const max = prompt("Enter the max number");

//  const random = Math.floor(Math.random() * max) +1;

//  let guess = prompt("Guess the number");

//  while (true) {
   
//    if (guess == "quit") {
//       console.log("User quit");
//       break;
//    }
//     if (guess == random) {

//       console.log("Congrats!! your guessing number was", random);
//       break;
//    } else if (guess < random) {

//       guess = prompt("Your guess  too small. Please try again");
      

//    } else {
//       guess = prompt("Your guess too large.Please try again");
//    }  
//  } 

  // Password protector 

//   const secretPass = "AhsanChoudhary";
//  let attempt = prompt("Enter the password to enter:");

//  while (true) {
//   if (attempt == "cancel") {
//     console.log("Access denied by user.");
//     break;
//   }
  
//   if (attempt == secretPass) {
//     console.log("Access Granted! Welcome.");
//     break;
//   } else {
//     attempt = prompt("Wrong password. Try again");
//   }
//  }

  // The Magic 8-Ball (Infinite Edition)


//   while (true) {
//   let question = prompt("Ask the Magic 8-Ball a question (or type 'quit'):");

//   if (question === "quit") {
//     console.log("The future remains a mystery!");
//     break;
//   }

//   const responses = ["Yes", "No", "Maybe", "Ask again later", "Definitely"];
//   const randomRes = responses[Math.floor(Math.random() * responses.length)];
  
//   alert("The Ball says: " + randomRes);
//  }

   // Dice Roll Game 

//    let roll = prompt("Type 'roll' to roll the dice or 'quit'");

//  while (roll !== "quit") {
//   let dice = Math.floor(Math.random() * 6) + 1;
//   console.log(" Dice number:", dice);

//   roll = prompt("Type 'roll' again or 'quit'");
//  }
//  console.log("Game ended");


  // Even or Odd Guess Game

   let number = Math.floor(Math.random() * 10) + 1;
  let guess = prompt("Guess even or odd");

 if ((guess === "even" && number % 2 === 0) || (guess === "odd" && number % 2 !== 0)) {
  console.log("Correct! Number was", number);
  
 } else {
  console.log("Wrong! Number was", number);
 }


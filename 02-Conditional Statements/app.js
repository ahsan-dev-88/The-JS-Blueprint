//Traffic light system
 let color =     "yellow";

 if (color === "red") {
    console.log("Stop ! light is red");
 }
  else if (color === "yellow") {
    console.log("Slow down. light color is yellow");
 }
   else if (color === "green") {
    console.log("Go. light color is green");
 }

 // Using if else 

 let age = 14;
 if (age >= 18 ) {
    console.log("you can vote");
 } else if (age < 18) {
     console.log("you cannot vote");
 }


  //If-Else-If

 let marks =    45;

 if(marks >= 80) {
    console.log("A++");
 } else if (marks >= 60) {
    console.log("A");
 } else if (marks >= 33) {
    console.log("B");
 } else if (marks < 33) {
    console.log("F");
 }


 // Using if else
 let month = "april";

 if (month === "january") {
    console.log("winter is here");
 } else if (month === "april") {
    console.log("summer is here");
 }


 let size = "XL";
 if (size === "XL") {
    console.log("price is Rs. 250");
 } else if (size === "l") {
    console.log("price is Rs.200");
 } else if (size === "M") {
    console.log("price is Rs. 100");
 } else {
    console.log("price is Rs. 50");
 }


 // Nested if else 

 let number=  80;

 if (number >= 33) {
 console.log("Pass");
  if (number >= 80) {
  console.log("Grade : O");
  } else {
 console.log("Grade : A");
  }  
  } else {
  console.log("Better luck next time!");
  }

 // Using Switch 

  let light = "red";

  switch(light) {
    case "red" :
      console.log("stop");
      break;
      case "yellow" :
        console.log("slow down");
        break;
        case "green" :
          console.log("go");
          break;
          default :
          console.log("Broken light");
  }
     

    //Using switch 
      
     let Quarter = 1
   switch(Quarter) {
   case 1 : console.log("January, Febuary,March");
   break;
   case 2 : console.log("April, May, June");
   break;
   case 3 : console.log("July, August,Septmber");
   break;
   case 4 : console.log("October, November, December");
   break;   default   : console.log ("Not a Quarter");
   }
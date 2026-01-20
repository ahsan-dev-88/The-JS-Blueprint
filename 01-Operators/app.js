// Area and Perimeter

let length = 10;
let width = 5;

let area = length * width;
let perimeter = 2 * (length + width);

console.log("Area of Rectangle is:", area);
console.log("Perimeter is:", perimeter);    


// Odd or Even

let num = 7;
// Using modulus(%) operator
if (num % 2 === 0) {    
    console.log(num, "is an Even number.");
} else {
    console.log(num, "is an Odd number.");
}
 
  //Exponentiation Operator (**)

  let n = 4;
let cube = n ** 3; 
console.log("Cube of", n, "is:", cube); 
  
  //Logical Operators
   
   let x = 15;

if (x > 10 && x < 20) {
    console.log(x, "is between 10 and 20");
} else {
    console.log(x, "is out of range");
}
   
 //variable named num, check if it is divisible by 10, and print "good" or "bad" based on that condition.

 let number = 50;
    if (number % 10=== 0) {
    console.log("good");
    }
     else  {
       console.log("bad");
       } ;
  
         //largest of 3 numbers.

   let a = 5;
   let b = 10;
   let c = 15;
    if(a >=b && a >= c) {
      console.log(a + " is the largest number");
    } else if (b >= a &&b >=c) {
      console.log(b +" is the largest number");
      
    } else {
       console.log(c + " is the largest number");
    }

    // check if 2 numbers have the same last digit.
    let num1 = 32;
    let num2 = 47852;
    if (num1%10 === num2%10){
      console.log("Number have the same last digit which is",num1%10);
     
    
    }else{
      console.log("Number have not last same digit");
    }
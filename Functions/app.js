  function printName () {
    console.log("Hello");
    console.log("Ahsan Choudhary");

 }

  function print1To5 () {
    for (let i=1; i<=5; i++) {
        console.log(i);
        
    }
  }
 printName();
 print1To5();
  

  function sum(a, b) {
    console.log(a + b);
  }

  function calcAvg(a, b, c) {
    let avg = (a+b+c)/3;
    console.log(avg);
  }
  
   sum(2, 3);
   calcAvg(3, 3, 3);


    // Print table 
     
    function printTable(n) {
      for(let i=n; i<=n*10; i+=n) {
        console.log(i);
      }
    }
    printTable(5);


  // Sum using return keyword
   function sum(a,b) {
    return a+b;
   }
   console.log(sum(sum(3,3),3));

    function isAdult(age) {
      if(age >= 18) {
        return "Adult";
      } else {
        return "Not adult";
      }
    }
      console.log(isAdult(20));

      // Sum of numbers using for loop

    function getSum(n) {
      let sum = 0;
       
      for(let i=1; i<=n; i++) {
        sum += i;
      }
      return sum;
    }
    console.log(getSum(1000));

     // Global scope and Function scope 
      
     var sum = 50;  // Global scope

     function calSum(a, b) {
        // let sum = a+b;      //function scope
        console.log(sum);
     }
     calSum(1, 2);
     console.log(sum);


      // block scope 

      let age = 25;
      if(age>= 18) {
        let str ="Adult";
        console.log(str);
      }


      // Lexical scope

      function outerFunc(){
        let x = 5;
        let y = 10;
        
        function innerFunc() {
          console.log(x);
        }
        innerFunc();
      }


      // Higher Order Functions

       function multipleGreet(func, count) {
        for(let i=1; i<=count; i++) {
          func();
           }

       }

       let greet = function() {
        console.log("ahsan ");
       }
      multipleGreet(function () {console.log("This is ahsan")},100);
    
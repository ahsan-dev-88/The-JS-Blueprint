 const sum = (a, b) => {
  console.log(a + b);
 };


 const cube = (n) => {
  return n * n * n;
 };


 const pow = (a, b) => {
    return a ** b;
 }

 // Implicit Return in Arrow Functions

 const mul = (a, b) => a * b;

 const sub = (a, b) => a - b;

 // Set TimeOut Function

 console.log("Hi, there");
  
 setTimeout(() => {
    console.log("My name is Ahsan");
 }, 4000);
 console.log("Welcome");


 const student = {
  name: "Ahsan",
  marks: 95,
  prop: this,   // global scope
  getName: function () {
    console.log(this);
    return this.name;

  },
   getMarks: () => {
    console.log(this); // parent's scope -> window
    return this.marks;
   },
   getInfo1: function () {
    setTimeout(() => {
      console.log(this); // student
    }, 2000);
   },
   getInfo2: function () {
    setTimeout(function () {
      console.log(this);       // window
           
    }, 2000);
    
   },
 };
 console.log(student.getInfo1());
 console.log(student.getInfo2());

 let arr = [1, 2, 3, 4, 5];

 arr.forEach(function (el) {
    console.log(el);
 });



 let student = [
    {
    name: "ahsan",
    marks: 94,
 },
 {
    name: "rahul",
    marks: 95,
 },
 {
    name: "aman",
    marks: 92,
 },
 {
    name: "sahil",
    marks: 90,
 }
 ];
 student.forEach((el) => {
    console.log(el);
 });
 
// Using Map_Filter

 let num = [1, 2, 3, 4];

 let double = num.map((el) => {
   return el* el;
 } );
 console.log(double);

 // Using filter

 let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
 let ans = nums.filter((el) => {
   return el % 2 == 0;
 });
 console.log(ans);

 let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
 let result = number.filter((el) => {
   return el % 2 != 0;
 });
 console.log(result);


 // Using every method

 let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
 let answer = array.every((el) => {
   return el % 2 == 0;
 });
 console.log(answer);

 // Using reduce method 

 var value = [1, 2, 3, 4, 5];
 let finalValue = value.reduce((res, el) => {
   console.log(res);
   return res + el;
 } );
 console.log(finalValue);


 let numbers = [1, 2, 3, 1];

 let finalresult = numbers.reduce((max, el) => {
    if(el > max) {
      return el;
    } else {
      return max;
    }
 });
 console.log(finalresult);


 // spread (Array literals)

  let odd = [1, 3, 5, 7, 9];
  let even = [2, 4, 6, 8, 10];

  let Result = [...even, ...odd];
  console.log(Result);


   let data = {
    email: "ahsan@gmail.com",
    password: "a@123"
   };

   let newData = {...data, id: 1234, country: "India"};
   console.log(newData);

   // Using Rest method 

   function sum(...args) {
     return args.reduce((sum, el) => sum + el )
   }
   console.log(sum(12,34,66,77));

   function min(...args) {
    return args.reduce((min, el) => {
      if (min > el) {
        return el;
      } else {
        return min;
      }
    })
   }
   console.log(min(22, 44, 66, 33, 4, -2));




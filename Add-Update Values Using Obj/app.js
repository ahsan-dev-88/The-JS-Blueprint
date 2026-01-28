//  Add, Update, and Delete Values

 const student = {
   name: "ahsan",
   age: 23,
   marks: 85.5,
   city: "delhi",
   country: "india"
 }
 console.log(student);
 console.log(student.city);
 console.log(student.city = "mumbai");
 console.log(delete student.marks);


//   Nested Objects
 
 const classInfo = {
   ahsan:{
      grade: "A",
      city: "delhi"
   },
   aman: {
      grade: "A",
      city: "mumbai"
   },
   gaurav: {
      grade: "B",
      city: "pune"
   }
 };

 // Array of Objects

  const classInfomation = [
   {
      name: "ahsan",
      grade: "A",
      city: "panjab"
   },
    {
      name: "aman",
      grade: "A",
      city: "mumbai",
      
   },
   {
      name: "sunny",
      grade: "B",
      city: "pune"
   }
 ];
 console.log(classInfomation);
 console.log(classInfomation[0]);
 console.log(classInfomation[1]);
 console.log(classInfomation[2]);
 console.log(classInfomation[0].name);
 console.log(classInfomation[0].city = "gurugram");
 console.log(classInfomation)
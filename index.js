// For more than three conditions

let gender ="m";

switch (gender) {
 case "m":
  console.log("male");
  break;
  case "n":
   console.log("female");
   break;

 default:
  console.log("transgender");
  break;
}

let age=13;

switch (true){
 case age<18:
 console.log("Child");
 break;
  case 18 < age < 60 :
   console.log("Adult");
   break;

   default:
    console.log("Nothing to do");

}

let day=1;
switch (day) {
 case 0:
   console.log("Monday");
  break;
 case 1:
  console.log("tuesday");
  break;
  case 3:
   console.log("wednesday");
   break;
   case 4:
   console.log("thursday");

   default:
    console.log("Anyday other than m t w t");
}

// Loop in js

for(let i=0; i<10; i++){
 console.log(i);
}
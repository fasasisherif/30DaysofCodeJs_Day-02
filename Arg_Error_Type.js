//By Fasasi Sherif
//A program to determine the error type of the argument of a function.
//Note: The argument must be a string not a number

function  myfunc(x) {
   if ( Math.floor(x) == Math.floor(x) ){
       console.log("The error is the argument 'x' is a number");
   }
   else {
       console.log("The is a string as should be and there is no error");
   }
}

myfunc(6737)
myfunc("ECX")
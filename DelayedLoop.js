/*	Name:		Kuteesa Kiyaga
	Date:		September 25, 2019
	Function:	Execute a loop where each increment is delayed.  
*/

//  set your counter to 1
var i = 0;

//  create a loop function
function myLoop (arrayVideoIDs) {           
   //  call a 3s setTimeout when the loop is called
   setTimeout(function () {    
      //  your code here
	  console.log(array[i]);
	  
	  //  increment the counter
      i++;
	  
	  // if the counter < 10, call the loop function
      if (i < array.length) {
         // again which will trigger another setTimeout()
		 myLoop(array);
      }                  
   }, 3000)
}

// execute the function
myLoop([1,2,3,4]);
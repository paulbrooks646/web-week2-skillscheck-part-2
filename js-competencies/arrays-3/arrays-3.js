
//+++++++++ Start Here! All problems are below. +++++++++//


//////////////////PROBLEM 1////////////////////

//Create a function called sunset that copies the existing array sunsetColors 
//by reference and then changes the first element to "blue". sunset should 
//return the copy of the array.

var sunsetColors = ["brown", "purple", "pink", "red", "orange", "yellow"]

//Code here
let newcolors = []
function sunset() {
for(let i=0; i<sunsetColors.length; i++) {
    newcolors.push(sunsetColors[i])
}
    
    console.log(newcolors)
    newcolors.splice(0, 1, "blue")
    console.log(newcolors)
    console.log(sunsetColors)
    return newcolors
}
//////////////////PROBLEM 2////////////////////

//Create a function called sunrise that copies the value of the existing array
//sunriseColors and then changes the first element to "green". sunrise should 
//return the copy of the array.

var sunriseColors = ["yellow", "orange", "red", "pink", "purple", "blue"]

//Code here
function sunrise() {
    var copySunriseColors = sunriseColors.slice()
    copySunriseColors.splice(0, 1, "green")
    return copySunriseColors
}

//////////////////PROBLEM 3////////////////////

//What is the difference between pass by reference, and pass by value?
//Uncomment the correct answer!

// var refVsVal = `Passing by value points to the same object in memory; pass 
//                 by reference creates a new object in memory with the same 
//                 values. A change made to a value copy will change both the
//                 copy and the original; a copy made by reference will only 
//                 change the copy's values`




 
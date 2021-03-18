/*
Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the 
purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/
function confirmEnding(str, target) {
    let spltStr = str.split(''); //separate string into pieces
    let ending = spltStr[spltStr.length - target.length] //gather the last items in the list
    let together = ending.join('') //join the array back together

    if (ending == target){
        return 'True'
    } else {
        return 'False'
    }
   
}

/*
Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an
array of all objects that have matching name and value pairs (second argument). Each 
name and value pair of the source object has to be present in the object from the 
collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the
second argument is { last: "Capulet" }, then you must return the third object from
the array (the first argument), because it contains the name and its value, that was
passed on as the second argument.
*/

function whatIsInAName(collection, source) {

  //create a variable that will contain all object properties in source
let keyObj = Object.keys(source);

//use filter() to extract all the properties in the object that match the condition under the every() method
 return collection.filter(
   item => { 
     //use the every() to iterate through all properties in keyObj (source)
     return keyObj.every(
       key => {
         //return all keys that can be found in items and that match with those in source
         return item.hasOwnProperty(key) 
         && item[key] === source[key]
        }); 
    });
};

//--------------------------------------------TEST-------------------------------------

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
//returns [ { first: 'Tybalt', last: 'Capulet' } ]

whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })
//returns [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })
//returns [{ "apple": 1, "bat": 2, "cookie": 2 }].

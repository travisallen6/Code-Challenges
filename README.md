# Code Challenges

This repo will be where I record all of the code challenges from codewars and my solutions.

## Level 5 - Extract the domain name from a URL
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

```js
domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
```
[Solution](/extractDomainName.js)

## Level 5 - Simple Pig Latin
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
```js
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldWay !
```
[Solution](/simplePigLatin.js)


## Level 4: Nesting Structure Comparison
Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structure as the first array.

For example:

```js
// should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

// should return false 
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );
```
For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.
[Solution](/nestingStructureComparison.js)


## Level 4: Sum Strings as Numbers

Given the string representations of two integers, return the string representation of the sum of those integers.

    For example:
```js
sumStrings('1','2') // => '3'
```
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
    
### MY NOTES 
Points of complication that needed to be accounted for:
- The tests passed in numbers with leading zeros which I removed using regex.
- A few tests passed in large number which were converted to scientific notation when run through parseIn meaning it wasn't enoguh to do parseInt(a) + parseInt(b).
    
[Solution](/sumStrings.js)
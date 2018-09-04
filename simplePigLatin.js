/*
    Level 5: Simple Pig Latin
    Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
    Examples
    pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
    pigIt('Hello world !');     // elloHay orldWay !
*/

function pigIt(str){
    //Code here
    str = str.split(' ');
    str = str.map( word => {
      let splitStr = word.split('');
      let firstLtr = splitStr.shift();
      splitStr.push(firstLtr);
      let output = splitStr.join('');
      if(!/[?,.!;:]/g.test(output)){
        return output + 'ay';
      }
      return output;
    })
    return str.join(' ');
}
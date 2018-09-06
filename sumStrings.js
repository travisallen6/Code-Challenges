/*
    Level 4: Sum Strings as Numbers

    Given the string representations of two integers, return the string representation of the sum of those integers.

    For example:

    sumStrings('1','2') // => '3'
    A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
    
    ===== MY NOTES =====
    = Points of complication that needed to be accounted for:
    = - The tests passed in numbers with leading zeros which I removed using regex.
    = - A few tests passed in large number which were converted to scientific notation when run through parseInt, meaning it wasn't enoguh to do parseInt(a) + parseInt(b).
    =====================
*/

function sumStrings(a,b) {
    a = a.replace(/\b0+/g, '');
    b = b.replace(/\b0+/g, '');
    let aArr = a.split('').reverse();
    let bArr = b.split('').reverse();
    let length = aArr.length > bArr.length ? aArr.length : bArr.length;
    let result = '';
    let remainder = 0;
    for(let i=0; i<length; i++) {
      if(!aArr[i]) {
        let current = parseInt(bArr[i]) + remainder;
        remainder = 0;
        if(i === bArr.length -1) {
          result += current.toString().split('').reverse().join('');
        } else if(current > 9) {
          current = current.toString().split('');
          remainder = current[0];
          result += current[1];
        } else {
          result += current.toString();
        }
      } else if(!bArr[i]) {
        let current = parseInt(aArr[i]) + remainder;
        remainder = 0;
        if(i === aArr.length -1) {
          result += current.toString().split('').reverse().join('');
        } else if(current > 9) {
          current = current.toString().split('');
          remainder = current[0];
          result += current[1];
        } else {
          result += current.toString();
        }
      } else {
        let current = parseInt(aArr[i]) + parseInt(bArr[i]) + remainder;
        current = current.toString()
        if(i === aArr.length -1 && i === bArr.length -1) {
          result += current.split('').reverse().join('');
        } else if(current > 9) {
          remainder = parseInt(current[0]);
          result += current[1]
        } else {
          result += current;
          remainder = 0;
        }
      }
    }
    return result.split('').reverse().join('');
  }

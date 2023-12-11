// Is Palindrome


// set up your function to take in a string as a parameter 
// iterate throught the string and compare the first and last letter
// if they are the same, continue to iterate through the string
// if the string has an odd number of characters then the middle letter will be ignored
// if at any point the letters are not the same, return false
// if the loop completes, return true
function isPalindrome(str) {
    let arr =[];
    for (let i = str.length-1; i >= 0; i--) {
        arr.push(str[i]);
    }
    return str === arr.join('');
}
console.log(isPalindrome('september'));
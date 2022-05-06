// const sumZero = (arr) => {
//     let solution = false
//     for(let i = 0; i < arr.length; i++){
//         for(let k = i+1; k < arr.length; k++){
//             // console.log(i,k)
//         if(arr[i] + arr[k] === 0){
//             solution = true;
//             }
//         }
//     }  
//     return solution
// }
// console.log(sumZero([1,2,3,-2]))
// I believe the runtime of this code would be O(n^2)
// this is because the loops are both considered O(n), and with one nested within the other (and dependent of one another) this causes it to be quadratic

// const hasUniqueChars = (str) => {
//     for(let i = 0; i <= str.length; i++){
//         for(let j = i+1; j <= str.length; j++){
//             if(str[i] === str[j]){
//                 return false
//             }
//         }
//     }
//     return true
// }
// console.log(hasUniqueChars("Moonday"))
// The runtime of this code is also: O(n^2)

// const pangram = (str) => {
//     let regex = /([a-z])(?!.*\1)/gi;
//     return (str.match(regex) || []).length === 26
//     }
// console.log(pangram("The quick brown fox jumps over the lazy dog!"))
// In this format, I believe this would be O(n) because while it is comparing against a constant number (26) my understanding is that match is looping through the string to check if it matches regex.


// const findLongestWord = (arr) => {
//     longestWord = 0
//     for(let i =0; i < arr.length; i++){
//         if(arr[i].length > longestWord){
//             longestWord = arr[i].length
//         }
//     }
//     return longestWord
// }
// console.log(findLongestWord(["hi", "hello", "elephant"]))
// I believe this one would be O(n) because it is depending on the length of the array in the for loop
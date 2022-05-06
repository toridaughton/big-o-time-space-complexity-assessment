// const sumZero = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             // console.log(i,k)
//         if(arr[i] + arr[j] === 0){
//             result = true;
//             }
//         }
//     }  
//     return false
// }
// console.log(sumZero([1,2,3,-2]))
// I believe the runtime of this code would be O(n^2) time complexity
// this is because the loops are both considered O(n), and with one nested within the other (and dependent of one another) this causes it to be quadratic
// space complexity is O(1) because it is pointing to location in memory

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
//  space complexity: O(n)

// const pangram = (str) => {
//     let regex = /([a-z])(?!.*\1)/gi;
//     return (str.match(regex) || []).length === 26
//     }
// console.log(pangram("The quick brown fox jumps over the lazy dog!"))
// In this format, I believe this would be O(n) because while it is comparing against a constant number (26) my understanding is that match is looping through the string to check if it matches regex.
// space complexity: O(n) because depends on length of string

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
// space complexity O(1)
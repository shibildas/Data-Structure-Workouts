
// Code

// Testcase
// Testcase
// Result

// 2325. Decode the Message
// Solved
// Easy
// Topics
// Companies
// Hint
// You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

// Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
// Align the substitution table with the regular English alphabet.
// Each letter in message is then substituted using the table.
// Spaces ' ' are transformed to themselves.
// For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
// Return the decoded message.
var decodeMessage = function(key:string, message:string) {
    let map={" ":" "}
    key=key.split(' ').join('')
    let index=0
    for (let i=0;i<key.length;i++){
        if(!map[key[i]]){
        const charCode=97+index
            map[key[i]]=String.fromCharCode(charCode)
            index++}
    }
    let result=''
    for(let i=0;i<message.length;i++){
        result+=map[message[i]]
    }
    return result
};
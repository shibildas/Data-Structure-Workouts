function replaceAlphabets(string,n){
    let result=''
    for(let i=0;i<string.length;i++){
        let char = string[i]
        if(char.match(/[a-z]/i)){
            let code= char.toLowerCase().charCodeAt(0)
            let newCode= ((code-97 +n)%26)+97
            let newChar= String.fromCharCode(newCode)
            result+=(char===char.toUpperCase()) ? newChar.toUpperCase(): newChar
        }else{
            result+=char
        }
        
    }
    return result
}
//* Minimum
// console.log(min(0,10)); -> 0
function min(a, b){
    return a < b ? a : b;
}

console.log(min(0,-10)); // -10

//* Recursion
function isEven(n){
    if(n === 0) return true;
    if(n === 1) return false;

    return isEven(n - 2);
}

console.log(isEven(50));    // → true
console.log(isEven(75));    // → false
// console.log(isEven(-1)); // → ?? call stack error :D

//* Bean counting
function countBs(str){
    let numB = 0;
    for( let i = 0; i < str.length; i++){
        if( str[i] == "B"){
            numB += 1;
        }
    }
    return numB;
}

console.log(countBs("BBC")); // 2

//* aranılan karakterin sayısı
function countChar(str, char){
    let numChar = 0;
    for( let i = 0; i < str.length; i++){
        if( str[i] == char){
            numChar += 1;
        }
    }
    return numChar;
}

function recursiveCountChar(str, char){
    if( str.length == 0) return 0;
    if( str.length == 1){
        if( str[0] == char) return 1;
        else return 0;
    }

    let count = 0;
    if( str[0] == char) count += 1;

    return count + recursiveCountChar(str.slice(1), char);
}

shorterRecursiveCountChar = (str, ch) => {
    if (str.length == 0) return 0;
    const charCountAtFirstChar = str[0] == ch ? 1 : 0;
    if (str.length == 1) return charCountAtFirstChar;

    return charCountAtFirstChar + shorterRecursiveCountChar(str.slice(1), ch);
}

console.log(recursiveCountChar("Berkarryr", "r"));

console.log(countChar("kakkerlak", "k")); // 4
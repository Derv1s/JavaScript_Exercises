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

console.log(countChar("kakkerlak", "k")); // 4
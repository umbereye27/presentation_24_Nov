function vowelsCount(str) {
    let vowels= "aeiuoAEIUO"
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1){
        count += 1;
    }
    
}
return count;
}
console.log("the number of vowel in given string is :",vowelsCount("UMBEREYE Carine"));
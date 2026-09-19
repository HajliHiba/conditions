const prompt = require('prompt-sync')();
let lettre = promt('give me a lettre :').tolowercase()
switch(lettre){
    case 'a':
    case 'e':
    case 'i':
    case 'u':
    case 'o':
    case 'y':
        console.log(`the lettre` + lettre + ` is a vowel.`)
        break;
    default:
        console.log(`the lettre` + lettre + ` is a consonant.`) 
    }   
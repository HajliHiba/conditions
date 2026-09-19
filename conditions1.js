const prompt = require('prompt-sync')()

let nombre = parseInt(prompt("Entrez un nombre entier :"));


if (nombre % 2 == 0 && nombre != 0) {
    
 
   console.log(`Le nombre ${nombre} est pair.`);

} else if(nombre % 2 == 1){
    console.log(`Le nombre ${nombre} est impair.`);
}
else
{
        console.log("not")
    }
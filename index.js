//traccia 1

var num1= 5;
var num2= 8;
var press1 = `Il valore della variable num1 è ${num1}`;
console.log(press1);

var press2 = `Il valore della variabile num2 è ${num2}`;
console.log(press2);

var stringa = 'Simone';
var pressStringa= `Il valore della variabile stringa è ${stringa}`;
console.log(pressStringa);
var stringa= 'Java';
console.log('Il valore della variabile stringa è '+ stringa);


const pigreco= 3.14159265359;
console.log('Il valore della variabile pigreco è' + ' ' + pigreco);

// const pigreco= 10;
// console.log(pigreco);
// sulla console mi riporta un errore 






//traccia 2

var numbers;
numbers = [1,2,3,4,5];
console.log(numbers);
var x;
x = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
console.log("Il valore della variabile x è la somma dei valori dell' array numbers ed è pari a "+ x);

y= x/5;
console.log("Il valore della variabile y è la media dei valori dell'array numbers ed è pari a "+ y);







// traccia 3

var currentYear= prompt("Inserisci l'anno corrente");
var yearOfBirth= prompt("Inserisci il tuo anno di nascita");
var age= currentYear - yearOfBirth;
var yearTo100= 100 - age;
alert('La tua età è '+ age);
alert('Sono necessari '+ yearTo100 + ' per raggiungere i 100 anni');






// traccia 4
var words= ['ragazzuoli','va','?',' ','ciao','come'];
console.log(words);
var question= `${words[4]} ${words[0]} ${words[5]} ${words[1]} ${words[2]}`;
console.log(question);



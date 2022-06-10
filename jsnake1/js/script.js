/*Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
la somma degli elementi è minore di 50.*/

const array=[];
console.log(array);

//La variabile del prompt

let answer;

//Somma iniziale 0

let sum=0;

//imposto le condizioni del ciclo
//imposto la condizione che la somma sia inferiore di 50
//ripetizione del ciclo fin quando non arriva a 50

while(sum < 50){

   //imposto il prompt già convertito

   answer=parseInt(prompt('Dammi un numero'));

   //la somma aumenta all'aumentare dei numeri inseriti fino a 50

   sum += answer;

   //aggiunta all'array

   array.push(answer);
}

//Controllo finale

console.log(array);
console.log(sum);

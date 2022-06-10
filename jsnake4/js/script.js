/*Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.*/

//Creazione di 2 array e controllo

const arrayNumberOne=[1,2,3,4,5,6,7];
console.log(arrayNumberOne);

const arrayNumberTwo=[1,2,3];
console.log(arrayNumberTwo);

//La variabile del prompt

let answer;

//imposto le condizioni del ciclo

for(let i = 0; i < arrayNumberOne.length; i++){

    //Scelta casuale elementi da aggiungere e controllo
    answer=Math.floor((Math.random()*100)+1);
    console.log(answer);

    //Imposto le condizioni per l'inserimento numerico nell'array con meno elementi
    if(arrayNumberOne.length === arrayNumberTwo.length){
    } else if(arrayNumberOne.length > arrayNumberTwo.length){
        arrayNumberTwo.push(answer);
    }
}

//controllo finale
console.log(arrayNumberTwo);
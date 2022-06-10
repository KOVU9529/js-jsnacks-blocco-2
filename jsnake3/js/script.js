/*Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.*/

//Valore iniziale somma

let sum=0;

//Variabile prompt

let answer;

//imposto le condizioni del ciclo for

for(let i = 0; i < 5; i++){

    //imposto il prompt convertito in numero e ontrollo
    answer=parseInt(prompt('Dimmi un numero'));
    console.log(answer);
    
    //la somma totale = alla somma dei 5 numeri richiesti
    sum += answer;
}

//Controllo somma
console.log(sum);


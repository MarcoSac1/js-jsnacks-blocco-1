

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8,];
let somma = 0;

// ciclo perr ogni numero in posizione dispari nell' array
for(let i = 0; i < numberArray.length; i++){
    
    // verifico per ogni iterazione se l'indice su cui sto iterando sia dispari
    if(i % 2 == 1){
        // se e dispari  => aggiungo l'elemento alla somma
        somma += numberArray [i];
    }

}
console.log(numberArray , somma);
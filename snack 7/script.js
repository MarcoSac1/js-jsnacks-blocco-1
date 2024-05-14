// Snack7
// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

let userNumber = Number.parseInt(prompt('inserisci un numero') ,10);
if( userNumber > 20 || userNumber < 1 || Number.isNaN(userNumber)){
    userNumber = Math.floor (Math.random() * 30) + 1 ;
    console.warn('User has type a wrong number: generating a random number...', userNumber);
}

// ciclo for da 0 ad userNumber
for (let index = 0; index < userNumber; index++) {
    const tempArray = [];

    for (let index = 0; index < 10; index++) {
        tempArray.push(Math.floor(Math.random() * 100) + 1);
        
    }
    
    console.log(tempArray);
}



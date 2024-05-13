// Crea un array vuoto.
//  Chiedi per 6 volte all'utente di inserire un numero,
//  se è dispari inseriscilo nell'array.

const empytArray = [ ];

for ( let i = 0 ; i < 6 ; i++){
    let insertEl = Number.parseInt(prompt ('type a number'), 10);
    if ( insertEl % 2 === 1){
        empytArray.push(insertEl);
        
    }
}
console.log(empytArray);
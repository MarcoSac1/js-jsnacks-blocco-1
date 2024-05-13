// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

const enterList = ['gino', 'luca', 'franco', 'antonio'];
let partyPeople = prompt('type your name');

if( enterList.includes(partyPeople)){
    console.log('Benvenuto');
    
}else {
    console.log('TU NON PUOI ENTRAREEE!!!');
}
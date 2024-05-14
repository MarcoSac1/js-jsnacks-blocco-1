// Snack8 
// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l'altro di verde. Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari e in verde i numeri pari.


const numberArray =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
const divElement = document.querySelector('div');

const divGreenEL = document.createElement('div');
divGreenEL.classList.add('green');

const divRedEL = document.createElement('div');
divRedEL.classList.add('red');


for (let index = 0; index < numberArray.length; index++){
    
    const newElement = document.createElement('p');
    newElement.append(numberArray[index]);

    if(numberArray[index] % 2 == 0){
        divGreenEL.appendChild(newElement);

    }else if(numberArray[index] % 2 == 1){
        divRedEL.appendChild(newElement);
    }
}
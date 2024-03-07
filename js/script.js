
// JSnack 1 

const zucchine = [
  {
    varietà: 'Zucchine verdi',
    peso: 0.3,
    lunghezza: 10
  },
  {
    varietà: 'Zucchine chiare',
    peso: 0.2,
    lunghezza: 8
  },
  {
    varietà: 'Zucchine tonde',
    peso: 0.4,
    lunghezza: 6
  },
  {
    varietà: 'Zucchine lunghe fiorentine',
    peso: 0.6,
    lunghezza: 15
  },
  {
    varietà: 'Zucchine trombetta',
    peso: 0.7,
    lunghezza: 12
  },
  {
    varietà: 'Zucchine gialle',
    peso: 0.9,
    lunghezza: 10
  },
  {
    varietà: 'Zucchine siciliane',
    peso: 2,
    lunghezza: 30
  },
  {
    varietà: 'Zucchine bianche triestine',
    peso: 0.8,
    lunghezza: 11
  },
  {
    varietà: 'Zucchine pâtisson ',
    peso: 1.5,
    lunghezza: 13
  },
  {
    varietà: 'Zucchine crookneck',
    peso: 0.9,
    lunghezza: 17
  },
];

const pesoTotale = zucchine.reduce((n, {peso}) => n + peso, 0)

console.log("Peso totale delle zucchine: " + pesoTotale + " Kg");

// JSnack 2


// array per le zucchine corte (< 15cm) e lunghe (>= 15cm)
const zucchineCorte = [];
const zucchineLunghe = [];

// divisione delle zucchine in base alla lunghezza
zucchine.forEach(zucchina => {
    if (zucchina.lunghezza < 15) {
        zucchineCorte.push(zucchina);
    } else {
        zucchineLunghe.push(zucchina);
    }
});

// calcolo del peso totale per ciascun gruppo
const pesoZucchineCorte = zucchineCorte.reduce((n, zucchina) => n + zucchina.peso, 0);
const pesoZucchineLunghe = zucchineLunghe.reduce((n, zucchina) => n + zucchina.peso, 0);

// stampa dei pesi
console.log("Peso totale delle zucchine corte: " + pesoZucchineCorte + " Kg");
console.log("Peso totale delle zucchine lunghe: " + pesoZucchineLunghe + " Kg");

// JSnack 3

function reverseString(str) {
  // converto la stringa in un array di caratteri, lo inverto e lo unisco di nuovo in una stringa
  return str.split("").reverse().join("");
}


const inputString = "Ciao";
console.log(inputString);
const reversedString = reverseString(inputString);
console.log(reversedString); 

// JSnack 4


function fusionArrays(array1, array2) {

// prendo due array come input e aggiungo alternativamente gli elementi da ciascun array al nuovo array risultante. Infine restituisco l'array fuso. 

  const fusedArray = [];

  for (let i = 0; i < array1.length; i++) {
      if (i < array1.length) {
          fusedArray.push(array1[i]);
      }
      if (i < array2.length) {
          fusedArray.push(array2[i]);
      }
  }
  return fusedArray;
}

const array1 = ['Nike', 'Adidas', 'Puma'];
const array2 = [43, 44, 45];
const fusedArray = fusionArrays(array1, array2);
console.log(fusedArray); 


// JSnack 5


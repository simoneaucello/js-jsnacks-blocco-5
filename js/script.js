
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


// Array per le zucchine corte (< 15cm) e lunghe (>= 15cm)
const zucchineCorte = [];
const zucchineLunghe = [];

// Divisione delle zucchine in base alla lunghezza
zucchine.forEach(zucchina => {
    if (zucchina.lunghezza < 15) {
        zucchineCorte.push(zucchina);
    } else {
        zucchineLunghe.push(zucchina);
    }
});

// Calcolo del peso totale per ciascun gruppo
const pesoZucchineCorte = zucchineCorte.reduce((n, zucchina) => n + zucchina.peso, 0);
const pesoZucchineLunghe = zucchineLunghe.reduce((n, zucchina) => n + zucchina.peso, 0);

// Stampa dei pesi
console.log("Peso totale delle zucchine corte: " + pesoZucchineCorte + " Kg");
console.log("Peso totale delle zucchine lunghe: " + pesoZucchineLunghe + " Kg");
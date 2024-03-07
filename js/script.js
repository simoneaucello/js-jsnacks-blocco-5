
// JSnack 1 

const zucchine = [
  {
    varietà: 'Zucchine verdi',
    peso: 0.3,
    lunghezza: '10 cm'
  },
  {
    varietà: 'Zucchine chiare',
    peso: 0.2,
    lunghezza: '8 cm'
  },
  {
    varietà: 'Zucchine tonde',
    peso: 0.4,
    lunghezza: '6 cm'
  },
  {
    varietà: 'Zucchine lunghe fiorentine',
    peso: 0.6,
    lunghezza: '15 cm'
  },
  {
    varietà: 'Zucchine trombetta',
    peso: 0.7,
    lunghezza: '12 cm'
  },
  {
    varietà: 'Zucchine gialle',
    peso: 0.9,
    lunghezza: '10 cm'
  },
  {
    varietà: 'Zucchine siciliane',
    peso: 2,
    lunghezza: '30 cm'
  },
  {
    varietà: 'Zucchine bianche triestine',
    peso: 0.8,
    lunghezza: '11 cm'
  },
  {
    varietà: 'Zucchine pâtisson ',
    peso: 1.5,
    lunghezza: '13 cm'
  },
  {
    varietà: 'Zucchine crookneck',
    peso: 0.9,
    lunghezza: '17 cm'
  },
];

console.log(zucchine.reduce((n, {peso}) => n + peso, 0));
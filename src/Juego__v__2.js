// Constantes
const LOSS = 'DERROTA';
const TIE = 'EMPATE';
const VICTORY = 'VICTORIA';

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

const ELEMENTS = [ROCK, PAPER, SCISSORS];

// STORE
let store = {
  showedMessage: '',
  letrero1:'¿Ahora quién ganará?',
  letrero2:'Toca aquí y vuelve a intentarlo',
};

const setShowedMessage = (newMessage) => {
  store.showedMessage = newMessage;
  if(store.showedMessage != ''){
    updateView();
  } else{updateView2();}
};

const anuncio = document.getElementById('anuncio');
const paragraph = document.getElementById('result');

const updateView2 = () => {
  paragraph.innerText = ' ';
  anuncio.innerText = store.letrero1;
};

const updateView = () => {
  paragraph.innerText = store.showedMessage;
  anuncio.innerText = store.letrero2;
};


const decisionTree = {
  [ROCK]: {
    [PAPER]: LOSS,
    [ROCK]: TIE,
    [SCISSORS]: VICTORY,
  },
  [PAPER]: {
    [SCISSORS]: LOSS,
    [PAPER]: TIE,
    [ROCK]: VICTORY,
  },
  [SCISSORS]: {
    [ROCK]: LOSS,
    [SCISSORS]: TIE,
    [PAPER]: VICTORY,
  },
};

const spanishChoiceTranslation = {
  [ROCK]: 'piedra',
  [PAPER]: 'papel',
  [SCISSORS]: 'tijeras',
};

const choose = (userChoice) => {
  const machineChoice = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];

  const result = decisionTree[userChoice][machineChoice];

  const userChoiceText = spanishChoiceTranslation[userChoice];
  const machineChoiceText = spanishChoiceTranslation[machineChoice];

  const textTree = {
    [VICTORY]: `Felicidades!!! Escogiste ${userChoiceText} y la máquina perdio al elegir ${machineChoiceText}. Adelante juega otra vez`,
    [LOSS]: `Lo siento! Escogiste ${userChoiceText} y la máquina ganó al elegir ${machineChoiceText} Vuelve a intentarlo`,
    [TIE]: `A ver, esta vez "Empataron". Tu y la Máquina eligieron igual: ${machineChoiceText} y ${userChoiceText}; ¡Vamos Gánale! intentalo de nuevo`,
  };
  const resultMessage = textTree[result];
  setShowedMessage(resultMessage);
};

window.addEventListener('load', () => {
  document.getElementById('rock').addEventListener('click', () => {
    choose(ROCK);
  });
  document.getElementById('paper').addEventListener('click', () => {
    choose(PAPER);
  });
  document.getElementById('scissors').addEventListener('click', () => {
    choose(SCISSORS);
  });
  anuncio.addEventListener('click', () => {
    updateView2();
  });
});

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
  anuncio: 'Prueba tu suerte',
  // letrero2:'Toca aquí y vuelve a intentarlo',
};

const setShowedMessage = (newMessage) => {
  store.showedMessage = newMessage;
  store.anuncio = 'Toca aquí e intentalo de nuevo'
  updateView();
};

const setAnuncio = (newAnuncio) => {
  store.anuncio = newAnuncio;
  updateView();
};

const updateView = () => {
  const anuncio = document.getElementById('anuncio');
  const paragraph = document.getElementById('result');

  paragraph.innerText = store.showedMessage;
  anuncio.innerText = store.anuncio;
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
    [VICTORY]: `Felicidades! Escogiste ${userChoiceText} y la máquina perdió al elegir ${machineChoiceText}. ¡Vamos Gánale! Juega otra vez`,
    [LOSS]: `Lo siento! Escogiste ${userChoiceText} y la máquina ganó al elegir ${machineChoiceText} ¡No te desanimes! Vuelve a intentarlo`,
    [TIE]: `A ver, esta vez "Empataron". Tu y la Máquina eligieron igual: ${machineChoiceText} y ${userChoiceText}; ¡Vamos Gánale! intentalo de nuevo`,
  };
  const resultMessage = textTree[result];
  setShowedMessage(resultMessage);
};

const deleteShowedMessage = () => {
  setShowedMessage('');
  if (store.showedMessage ==='') {
    setAnuncio('¿Ahora quién ganará?');
  }
};

window.addEventListener('load', () => {
  const rockButton = document.getElementById('rock');
  const paperButton = document.getElementById('paper');
  const scissorsButton = document.getElementById('scissors');
  const anuncio = document.getElementById('anuncio');

  rockButton.addEventListener('click', () => {
    choose(ROCK);
  });
  paperButton.addEventListener('click', () => {
    choose(PAPER);
  });
  scissorsButton.addEventListener('click', () => {
    choose(SCISSORS);
  });

  anuncio.addEventListener('click', () => {
    deleteShowedMessage();
  });
});

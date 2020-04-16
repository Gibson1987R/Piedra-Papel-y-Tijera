const ELEMENTOS = ['piedra', 'papel', 'tijera'];


const Ocultar = () => {
    const btnIntentar = document.getElementById('btnIntentar');
    btnIntentar.addEventListener('onclick', Ocultar);
    btnIntentar.classList.add('hide');
};

const BorrarElemento = () => {
    const elemento = document.getElementById('emerge');
    const btnIntentar = document.getElementById('btnIntentar');
    const pad = document.getElementById('midiv-1');
    var hijo = pad.lastChild;
    pad.removeChild(hijo);
};

const arbolDeDesiciones = {
    piedra: {
        papel: 'DERROTA',
        piedra: 'EMPATE',
        tijera: 'VICTORIA',
    },
    papel: {
        tijera: 'DERROTA',
        papel: 'EMPATE',
        piedra: 'VICTORIA',
    },
    tijera: {
        piedra: 'DERROTA',
        tijera: 'EMPATE',
        papel: 'VICTORIA',
    },
};

function elegir(eleccionUsuario) {
    const eleccionMaquina =
        ELEMENTOS[Math.floor(Math.random() * ELEMENTOS.length)];

    const resultado = arbolDeDesiciones[eleccionUsuario][eleccionMaquina];

    switch (resultado) {
        case 'VICTORIA':
            // NotaGanadora(eleccionUsuario, eleccionMaquina);
            console.log(`Felicidades!!! Escogiste ${eleccionUsuario}
            y la máquina perdio al elegir ${eleccionMaquina}. Adelante juega otra vez`)
            break;
        case 'DERROTA':
            // NotaPerdedora(eleccionUsuario, eleccionMaquina);
            console.log(`Lo siento! Escogiste ${eleccionUsuario}
            y la máquina ganó al elegir ${eleccionMaquina} Vuelve a intentarlo`)
            break;
        case 'EMPATE':
            // igualando(eleccionMaquina, eleccionUsuario);
            console.log(`A ver, esta vez "Empataron". Tu y la Máquina eligieron igual: 
            ${eleccionMaquina} y ${eleccionUsuario}; ¡Vamos Gánale! intentalo de nuevo`)
            break;
    }
}
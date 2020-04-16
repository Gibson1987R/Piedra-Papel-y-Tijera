const ELEMENTOS = ['piedra', 'papel', 'tijera'];

const igualando = (maquina, user) => {
    var cajitaFeliz = document.createElement('div');
    //creando el texto del nodo
    var texto = document.createTextNode(
        `Empataron...La máquina y Tu elegido: ${maquina} = ${user}`
    );
    //integrandolo a la etiqueta
    cajitaFeliz.appendChild(texto);
    //añadiendo un atributo
    cajitaFeliz.setAttribute('class', 'mih1');
    cajitaFeliz.setAttribute('id', 'emerge');
    //colocandolo en su contenedor
    var cont = document.getElementById('midiv-1');
    cont.appendChild(cajitaFeliz);
};

const NotaGanadora = (eleccionUsuario, eleccionMaquina) => {
    var cajitaFeliz = document.createElement('div');
    var texto = document.createTextNode(`Felicidades Ganaste!!!! ;) Escogiste ${eleccionUsuario}
    y la máquina perdio al elegir ${eleccionMaquina}`);
    cajitaFeliz.appendChild(texto);
    cajitaFeliz.setAttribute('class', 'necio');
    cajitaFeliz.setAttribute('id', 'emerge');
    var cont = document.getElementById('midiv-1');
    cont.appendChild(cajitaFeliz);
};

const NotaPerdedora = (eleccionUsuario, eleccionMaquina, derrota) => {
    var cajitaFeliz = document.createElement('div');
    var texto = document.createTextNode(`Lo siento Perdiste! :( Escogiste ${eleccionUsuario}
    y la máquina ganó al elegir ${eleccionMaquina} Vuelve a intentarlo`);
    cajitaFeliz.appendChild(texto);
    cajitaFeliz.setAttribute('class', 'necio');
    cajitaFeliz.setAttribute('id', 'emerge');
    var cont = document.getElementById('midiv-1');
    cont.appendChild(cajitaFeliz);
};

// NOTA: ESTA FUNCION DONDE SE ESTA USANDO?
function inicio() {
    const Piedrota = document.getElementById('piedra');
    const Tijerota = document.getElementById('tijera');
    const Papelote = document.getElementById('papel');
    Piedrota.addEventListener('click', eleccion);
    Papelote.addEventListener('click', eleccion);
    Tijerota.addEventListener('click', eleccion);
}

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
            NotaGanadora(eleccionUsuario, eleccionMaquina);
            break;
        case 'DERROTA':
            NotaPerdedora(eleccionUsuario, eleccionMaquina);
            break;
        case 'EMPATE':
            igualando(eleccionMaquina, eleccionUsuario);
            break;
    }
}

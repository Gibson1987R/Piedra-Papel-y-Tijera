const victoria = 'Ganaste...!';

const derrota = 'Perdiste! ';

const elementos = ['Piedra', 'Papel', 'Tijera'];

const igualando = (maquina, user) => {
    var cajitaFeliz = document.createElement('h2');
    //creando el texto del nodo
    var texto = document.createTextNode(`A ver, esta vez "Empataron". Tu y la Máquina eligieron igual: 
    ${maquina} y ${user}; ¡Vamos Gánale! intentalo de nuevo`)
        //integrandolo a la etiqueta
    cajitaFeliz.appendChild(texto);
    //añadiendo un atributo
    cajitaFeliz.setAttribute('class', 'mih1');
    cajitaFeliz.setAttribute('id', 'emerge');
    //colocandolo en su contenedor
    var cont = document.getElementById('midiv-1');
    cont.appendChild(cajitaFeliz);
}

const NotaGanadora = (user, maquina, victoria) => {
    var cajitaFeliz = document.createElement('h2');
    var texto = document.createTextNode(`Felicidades ${victoria} Escogiste ${user}
    y la máquina perdio al elegir ${maquina}. Adelante juega otra vez`)
    cajitaFeliz.appendChild(texto);
    cajitaFeliz.setAttribute('class', 'necio');
    cajitaFeliz.setAttribute('id', 'emerge');
    var cont = document.getElementById('midiv-1');
    cont.appendChild(cajitaFeliz);
}

const NotaPerdedora = (user, maquina, derrota) => {
    var cajitaFeliz = document.createElement('h2');
    var texto = document.createTextNode(`Lo siento ${derrota} Escogiste ${user}
    y la máquina ganó al elegir ${maquina} Vuelve a intentarlo`)
    cajitaFeliz.appendChild(texto);
    cajitaFeliz.setAttribute('class', 'necio2');
    cajitaFeliz.setAttribute('id', 'emerge');
    var cont = document.getElementById('midiv-1');
    cont.appendChild(cajitaFeliz);
}

function inicio() {
    const Piedrota = document.getElementById('piedra')
    const Tijerota = document.getElementById('tijera')
    const Papelote = document.getElementById('papel')
    Piedrota.addEventListener('click', eleccion);
    Papelote.addEventListener('click', eleccion);
    Tijerota.addEventListener('click', eleccion);
}

const Ocultar = () => {
    const btnIntentar = document.getElementById("btnIntentar")
    btnIntentar.addEventListener('onclick', Ocultar)
    btnIntentar.classList.add('hide')
}

const BorrarElemento = () => {
    const elemento = document.getElementById("emerge")
    const btnIntentar = document.getElementById("btnIntentar")
    const pad = document.getElementById("midiv-1")
    var hijo = pad.lastChild;
    pad.removeChild(hijo)
}

function eleccion(user) {
    maquina = elementos[Math.floor(Math.random() * elementos.length)];
    switch (true && true) {
        case maquina === 'Piedra' && user === 'Papel':
            NotaGanadora(user, maquina, victoria)
            break;
        case maquina === 'Tijera' && user === 'Piedra':
            NotaGanadora(user, maquina, victoria)
            break;
        case maquina === 'Papel' && user === 'Tijera':
            NotaGanadora(user, maquina, victoria)
            break;
        case maquina === 'Papel' && user === 'Piedra':
            NotaPerdedora(user, maquina, derrota);
            break;
        case maquina === 'Tijera' && user === 'Papel':
            NotaPerdedora(user, maquina, derrota);
            break;
        case maquina === 'Piedra' && user === 'Tijera':
            NotaPerdedora(user, maquina, derrota);
            break;
        default:
            igualando(maquina, user)
            break;
    }
}
//! VARIABLE DECLARATION AREA!!
const input = document.getElementById('input');
const counter = document.getElementById('counter');
const button = document.getElementById('clear');
const listaUL = document.getElementById('container--ULlist');
const listaLI = document.getElementsByTagName('li');

const closeClass = document.getElementsByClassName("close");

//* loading animation
setTimeout(() => {
    document.getElementById('loading').style.opacity = '0';

    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 500);
}, 2000);

//* input properties
counter.innerHTML = listaLI.length;

setTimeout(() => {
    input.focus();
}, 1600);

let IDcounter = 0;
let IDarray = [];

function setAttrToClose() {
    closeClass[closeClass.length - 1].setAttribute('onclick', `removeSelectedItem(${IDcounter})`);
    IDarray.push(IDcounter);
}

function createElement(txt) {
    const listItem = document.createElement('li');
    listItem.id = IDcounter;

    const elementText = document.createTextNode(txt);

    const span = document.createElement("SPAN");
    const spanText = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(spanText);

    listItem.appendChild(elementText);

    listaUL.appendChild(listItem);
    listItem.appendChild(span);

    setAttrToClose();

    IDcounter++;
}

//* listening for the 'ENTER' |13| key
input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        if (input.value != 0) {
            createElement(input.value);
            input.value = '';

            counter.innerHTML = listaLI.length;
        } else
            alert('Preencha o input!');
    }
})

//* listening for a LI click
listaUL.onclick = (e) => {
    if (e.target.tagName === 'LI')
        e.target.classList.toggle('list--item__active');
}

button.onclick = () => {
    if (!listaLI.length)
        alert('não tem nada pra limpar!')
    else {
        listaUL.innerHTML = '';
        counter.innerHTML = 0;
    }
}

function removeSelectedItem(value) {
    listaUL.removeChild(document.getElementById(`${value}`));
    IDarray.splice(IDarray.indexOf(value), 1);
    counter.innerHTML = listaLI.length;
}
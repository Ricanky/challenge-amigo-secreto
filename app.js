// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if(nombre === ''){
        alert('Por favor, inserta un nombre');
    }
    else{
        amigos.push(nombre);
        document.getElementById('amigo').value = '';
    }
    actualizarListaAmigos();
}

function actualizarListaAmigos(){
    const lista = document.getElementById('listaAmigos');

    lista.innerHTML = '';

    for(let i = 0; i < amigos.length; i++){
        let elemento = document.createElement('li');
        elemento.textContent = amigos[i];
        lista.appendChild(elemento);
    }
}
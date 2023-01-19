const agregar = document.querySelector(".btn-agregar");
const input = document.querySelector("input");
const tituloadd = document.querySelector('.titulo-input');
const contenedor = document.querySelector('ul');
const tareaTexto = document.querySelector('.contenido');
const instaciaTitulo = document.querySelector('titulo-input');
const sinTareas = document.querySelector('.sintareas');


const editar = document.createElement('button');



let listaArray = []


const lista = document.createElement('li');
const parrafo = document.createElement('p');
const parrafo2 = document.createElement('p');
const bloqueTop = document.createElement('div'); 



agregar.addEventListener('click', (e) => {
    e.preventDefault();

    const titulo = tituloadd.value;
    const texto = tareaTexto.value;

    if (!titulo || !texto) {
        return;
    }


    const lista = document.createElement('li');
    const parrafo = document.createElement('p');
    const parrafo2 = document.createElement('textarea');
    const bloqueTop = document.createElement('div'); 
    

    lista.classList.add('card')

    editar.classList.add('btn-editar');
    editar.textContent = "Edit";

    bloqueTop.classList.add('bloque-lista')
    parrafo.classList.add('titulo');
    parrafo2.classList.add('texto-lista');
    parrafo.textContent = titulo;
    parrafo2.classList.add('text');


    
    parrafo2.value = tareaTexto.value;

    parrafo2.setAttribute('readonly', 'readonly');
    parrafo2.setAttribute('rows', tareaTexto.value.split('\n').length);
    // Efecto Expandir textarea
    $(parrafo2).on('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

    lista.appendChild(bloqueTop)
    lista.appendChild(parrafo);
    lista.appendChild(parrafo2);
    lista.appendChild(botonBorrar());

    // Edit elements
    var editar_input = document.createElement('textarea');
    editar_input.classList.add('edit-input');
    editar_input.classList.add('hide');
    editar_input.name ='editar-input';
    editar_input.type = 'text';
    editar_input.value = parrafo2 ;

    
    var edit_btn = document.createElement('button');
    edit_btn.classList.add('edit');
    edit_btn.innerText = 'Edit';

    // Evento Edit
    edit_btn.addEventListener('click', (e) => {
        if (edit_btn.innerText.toLowerCase() == "edit") {
            edit_btn.innerText = "Save";
            edit_btn.classList.add('activo')
            parrafo2.removeAttribute("readonly");
            parrafo2.focus();
        } else {
            edit_btn.innerText = "Edit";
            edit_btn.classList.remove('activo')
            parrafo2.setAttribute("readonly", "readonly");
        }
    })
    lista.append(edit_btn)


    // Agregar ID a la tarea
    lista.id = idGenerator()

    listaArray.push(lista)
    console.log(listaArray)

    contenedor.appendChild(lista);
    tituloadd.value = '';
    tareaTexto.value = '';

    const contador = document.getElementsByClassName('card').length

    if (contador != 0) {
        sinTareas.textContent = '';

    } else {
        sinTareas.textContent = 'No hay tareas pendientes'
    }
});

function botonBorrar() {
    const borrar = document.createElement('button');
    
    borrar.classList.add('btn-borrar');
    borrar.textContent = "x";

    borrar.addEventListener('click', (e) => {
        const nota = e.target.parentElement;
        const parentid = e.target.parentElement.id;

        borrar.id = parentid
        console.log(borrar.id)
        contenedor.removeChild(nota);

        if (document.getElementsByClassName('card').length != 0) {
            sinTareas.textContent = '';

        } else {
            sinTareas.textContent = 'No hay tareas pendientes.'
        }


    })
    return borrar

}


function idGenerator(){
    return Date.now().toString();
}





function botonEditar(){
    const editar = document.createElement('button');
    let editando = false;
        
    editar.classList.add('btn-editar');
    editar.textContent = "Edit";

    // Agregar evento click a la función editarTarea
    editar.addEventListener('click', (e) => {
        const nota = e.target.parentElement
        const inputET = document.createElement('input')
        const inputEC = document.createElement('textarea')
        
        inputET.classList.add('inputET')
        inputEC.classList.add('inputEC')
    if(!editando){
        nota.appendChild(inputET)
        nota.appendChild(inputEC)
        editando = true
    }else if(editando){
        nota.removeChild(inputET)
        nota.removeChild(inputEC)
        }

    });

    return editar;
}






function GenerarLista(){
    const lista = document.createElement('li');
    const parrafo = document.createElement('p');
    const parrafo2 = document.createElement('p');
    const bloqueTop = document.createElement('div');


    lista.classList.add('card')

    editar.classList.add('btn-editar');
    editar.textContent = "Edit";

    bloqueTop.classList.add('bloque-lista')
    parrafo.classList.add('titulo');
    parrafo2.classList.add('texto-lista');
    parrafo.textContent = titulo;
    parrafo2.textContent = texto;

    lista.appendChild(bloqueTop)
    lista.appendChild(parrafo);
    lista.appendChild(parrafo2);
    lista.appendChild(botonBorrar());
    lista.appendChild(botonEditar(lista.id));

    // Agregar ID a la tarea
    lista.id = idGenerator()

    return lista
}




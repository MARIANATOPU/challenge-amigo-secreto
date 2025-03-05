// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = []; //Declaracion de variable para agregar array

//Declaro funcion para agregar amigos
function agregarAmigo() {
  let inputNombre = document.getElementById("amigo"); //Para capturar lo que se digite en el campo de texto
  let amigo = inputNombre.value;

  //valido que se ingrese la informacion
  if (!amigo) {
    alert("Ingresar nombre participante");
    return;
  }
  // Funcion para agregar amigos
  friends.push(amigo);
  inputNombre.value = ""; //limpia el campo de texto
  inputNombre.focus(); //para que el cursor se mantenga en el campo de texto
  mostrarNombres(); //llama a la funcion para mostrar los nombres
}

function mostrarNombres() {
  let listaAmigos = document.getElementById("listaAmigos"); //Captura el elemento ID = listaAmigos
  listaAmigos.innerHTML = ""; // limpia la lista de amigos

  // Se hace un loop
  for (let i = 0; i < friends.length; i++) {
    let item = document.createElement("li"); //crea un elemento en li
    item.textContent = friends[i]; //agrega el contenido de la lista
    listaAmigos.appendChild(item); //llama a la ul y agrege como hijo a li item 
}
}
// funcion para sortear los amigos
function sortearAmigo() {
  //Validacion para que haya al menos dos participantes 
    if(friends.length === 0) {
    alert("Deben haber al menos dos participantes");
    return;
}
  let amigoSorteado = friends[Math.floor(Math.random() * friends.length)]; //sortea el amigo
  let resultado = document.getElementById("resultado"); //captura el elemento ID = resultado
  resultado.innerHTML = `Tu Amigo Secreto es:  ${amigoSorteado}`; //muestra el amigo sorteado

// Limpia la lista que aparece en la pantalla despues que sortea al amigo
  let limpiarLista = document.getElementById("listaAmigos"); //captura el elemento ID = listaAmigos
  limpiarLista.innerHTML = ""; //limpia la lista de amigos
}



// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

var nuevoDiv = document.createElement("div"); 
document.body.appendChild(nuevoDiv);

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

nuevoDiv = document.createElement("div"); 
nuevoDiv.appendChild(document.createElement("p"))
document.body.appendChild(nuevoDiv);

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.

nuevoDiv = document.createElement("div"); 
for(let i = 0; i < 6 ; i++){
  nuevoDiv.appendChild(document.createElement("p"))
}
document.body.appendChild(nuevoDiv);
// 1.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.

nuevoDiv = document.createElement("div"); 
let contentP = document.createElement("p");
contentP.innerText='Soy dinámico!';
nuevoDiv.appendChild(contentP);
document.body.appendChild(nuevoDiv);

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let h2InIndex = document.querySelector('h2.fn-insert-here');
h2InIndex.innerText='Wubba Lubba dub dub';

// 1.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.

 const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
 let listOfApps = document.createElement("ul");
 for(let i=0; i<apps.length ; i++){
  let app = document.createElement('li');
  app.innerText = apps[i];
  listOfApps.appendChild(app);
 }
 document.body.appendChild(listOfApps);

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let elementos = document.querySelectorAll(".fn-remove-me");

elementos.forEach(element => {
  element.parentNode.removeChild(element);
});


// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
let nuevoP = document.createElement("p"); 
nuevoP.textContent = 'Voy en medio!';
let segundoDiv = document.querySelectorAll("div")[1];
segundoDiv.parentNode.insertBefore(nuevoP, segundoDiv);


// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here

let divsInsert = document.querySelectorAll("div.fn-insert-here");
divsInsert.forEach(element => {
  let nuevoPr = document.createElement("p");
  nuevoPr.innerText = "Voy dentro!";
  element.appendChild(nuevoPr);
});

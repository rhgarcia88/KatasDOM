// Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

let ul = document.createElement("ul");
let parent = document.querySelector("[data-function='printHere']");

for (let i = 0; i < places.length; i++) {
  let li = document.createElement("li");
  li.innerText=places[i];
  ul.appendChild(li);
}

parent.appendChild(ul);
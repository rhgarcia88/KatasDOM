// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let countriesList = document.createElement('ul');
countries.forEach(element => {
  let country = document.createElement('li');
  country.innerText=element;
  countriesList.appendChild(country);
  console.log(country);
});
document.body.appendChild(countriesList);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let toRemove = document.querySelector('.fn-remove-me');
toRemove.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
var newList = document.createElement("ul"); 
cars.forEach(function(elemento) {
  var newLi = document.createElement("li");
  newLi.textContent = elemento;
  newList.appendChild(newLi);
});
let divToPrint = document.querySelector('div[data-function="printHere"]');
divToPrint.appendChild(newList);

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countries2.forEach(element => {
  let div = document.createElement('div');
  div.setAttribute('class', '.imgContainer')
    let h4 = document.createElement('h4');
    let img = document.createElement('img');
    img.setAttribute('src', element.imgUrl);
    h4.innerText=element.title;
div.appendChild(h4);
div.appendChild(img);
    
document.body.append(div);
});

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.
let button = document.createElement('button');
button.innerText='Borrar último';
document.body.appendChild(button);

button.addEventListener('click', ()=>{
  let divs = document.querySelectorAll('div>h4+img');
  
  if (divs.length > 0) {
    divs[divs.length - 1].parentNode.remove();
  }
});


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.


document.querySelectorAll('div>h4+img').forEach((div) =>{
  
  let button = document.createElement('button');
  button.innerText = 'Borrar este div';
  
  button.addEventListener('click', ()=>{
    div.parentNode.remove();
  });

  div.parentNode.appendChild(button);
});


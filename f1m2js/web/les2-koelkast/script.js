console.log("script is geladde");

const groentenvak = document.getElementById("groente");
const fruitvak = document.getElementById("fruit");

 function zetInFruitLa(fruit){
     console.log(fruit);

    const nieuwElement = document.createElement('h2')  ;
    nieuwElement.innerHTML = fruit;
    nieuwElement.className = 'green';
    fruitvak.appendChild(nieuwElement);
 }

 function zetIngroenteLa(groente){
    console.log(groente);

    const nieuwElement = document.createElement('h2')  ;
    nieuwElement.innerHTML = groente;
    nieuwElement.className = 'kleur';
    groentenvak.appendChild(nieuwElement);
   
}

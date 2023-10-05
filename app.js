// Prendo variabile input km dal DOM

const DOMinputKm = document.getElementById("km");

// Prendo la variabile età dalla select del DOM

const DOMage = document.getElementById("discount");

// Prendo il pulsante dal DOM

const btnDOM = document.getElementById("btn-calc");

// Prendo la variabile name dal DOM

const DOMname = document.getElementById("name");

// Prendo la variabile surname dal DOM

const DOMsurname = document.getElementById("surname");

// Aggiungo evento sul button

btnDOM.addEventListener("click", function(){
 
  //Mi vado a prendere il valore dell'input km

  const km = parseInt(DOMinputKm.value);
  
  //Mi vado a prendere il valore dell'età dell'utente selezionata nella select 

  const age = parseInt(DOMage.value);

  // Mi vado a prendere il valore della variabile name

  const name = DOMname.value;

  // Mi vado aprendere il valore della variabile surname

  const surname = DOMsurname.value;

  //Imposto il prezzo base del biglietto

  let basePrice = km * 0.21;

  // SE l'utente non inserisce o un numero o un valore negativo allora non eseguire il resto del codice se no vai avanti

   if (isNaN(km) || km <= 0 || name === "" || surname === "") {
    document.querySelector(".price").innerHTML ="Non hai inserito i dati correttamente";
   } else {

  
  //Applico gli sconti in base ai km e all'età del passeggero

  if (age === 1) {
    const minorDiscount = (basePrice * 20) / 100;
    basePrice = basePrice - minorDiscount;
  } else if (age === 2) {
    const oldDiscount = (basePrice * 40) / 100;
    basePrice = basePrice - oldDiscount;
  }

  //Stampo il prezzo

  document.querySelector(".price").innerHTML ="Il prezzo del tuo biglietto è: " + basePrice.toFixed(2) + " &euro;";
}})


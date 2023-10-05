// Prendo variabile input km dal DOM
const DOMinputKm = document.getElementById("km");

// Prendo la variabile età dalla select del DOM
const DOMage = document.getElementById("discount");

// Prendo il pulsante btn-calc dal DOM
const btnDOM = document.getElementById("btn-calc");

// Prendo la variabile name dal DOM
const DOMname = document.getElementById("name");

// Prendo la variabile surname dal DOM
const DOMsurname = document.getElementById("surname");

// Prendo il pulsante btn-reset dal DOM
const btnReset = document.getElementById("btn-reset");

// Creo variabile stringa riciclabile
const errorForm = "Non hai inserito i dati correttamente";

// Creo variabile generale per l'output
const outputForm = document.querySelector(".price");

// Aggiungo evento sul click di btn-calc
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
    outputForm.innerHTML = errorForm;
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
  outputForm.innerHTML ="Il prezzo del tuo biglietto è: " + basePrice.toFixed(2) + " &euro;";
}})

// Aggiungo evento reset sul click di btn-reset
btnReset.addEventListener("click", function(){
  if (DOMname.value != "" || DOMsurname.value != "" || DOMinputKm.value != "" || DOMage.value != "0") {
      DOMname.value = "";
      DOMsurname.value = "";
      DOMinputKm.value = "";
      outputForm.innerHTML ="";
      DOMage.value = "0"; 
      outputForm.value = "error";
   } else if (outputForm.value = "error") {
    outputForm.innerHTML ="";
   }
}) 




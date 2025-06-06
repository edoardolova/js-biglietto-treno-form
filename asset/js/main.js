// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// MILESTONE 3:
// Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.

const underScount = 0.8;
const overScount = 0.6;
const ticketCostKm = 0.21; 

const formEl = document.getElementById("ticketForm");
const NameInputEl = document.getElementById("floatingName");
const KmInputEl = document.getElementById("floatingKm");
const ageInputEl = document.getElementById("floatingSelectGrid");

// ticket variable 
const ticketDivEl = document.getElementById("ticketDiv");
const ticketNameEl =document.getElementById("ticketName");
const ticketTypeEl =document.getElementById("ticketType");
const ticketCarriageEl =document.getElementById("ticketCarriage");
const ticketCodeEl =document.getElementById("ticketCode");
const ticketPriceEl =document.getElementById("ticketPrice");

// btn 
const resetBtnEl = document.getElementById("resetBtn");


formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    createTicket(NameInputEl.value, KmInputEl.value, ageInputEl.value);
});

resetBtnEl.addEventListener("click", ()=>{
    ticketNameEl.innerText = "";
    ticketTypeEl.innerText = "";
    ticketCarriageEl.innerText = "";
    ticketCodeEl.innerText = "";
    ticketPriceEl.innerText = "";
});

const randInt = (max)=> Math.ceil(Math.random()*max);

const calculatePrice = (distanceKm, scount)=> {
    if (scount === "over") {
        return ((distanceKm * ticketCostKm) * overScount).toFixed(2);
    }

    else if (scount === "under") {
        return ((distanceKm * ticketCostKm) * underScount).toFixed(2); 
    }
    else {
        return (distanceKm * ticketCostKm).toFixed(2);
    }
}

const createTicket = (completeName, km, age) =>{
    ticketNameEl.innerText = completeName;
    ticketTypeEl.innerText = `Biglietto ${age}`;
    ticketCarriageEl.innerText = randInt(9);
    ticketCodeEl.innerText = randInt(99999);
    ticketPriceEl.innerText = `${calculatePrice(km, age)}€`;
    if (ticketDivEl.classList.contains("d-none")) {
        ticketDivEl.classList.remove("d-none");
    }

}



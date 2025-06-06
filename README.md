# Calcolatore Prezzo Biglietto del Treno 🚆

## Descrizione
Questo progetto permette di calcolare il prezzo di un biglietto del treno in base ai chilometri da percorrere e all'età del passeggero. Il calcolo del prezzo tiene conto di eventuali sconti applicabili a minorenni e over 65.

---

## Regole di Calcolo

- Il prezzo base è **0.21 € al km**
- **Sconto del 20%** per passeggeri **minorenni** (età < 18)
- **Sconto del 40%** per passeggeri **over 65** (età > 65)


## Milestone

### ✅ Milestone 1 - Logica base (Console)
- Input: chilometri da percorrere e fascia di età dell'utente.
- Output: prezzo del biglietto **stampato in console**.
- Nessun layout o stile applicato.

### ✅ Milestone 2 - Interfaccia utente base (HTML)
- Implementazione di un **form HTML** con input per:
  - Nome passeggero
  - Chilometri da percorrere
  - Fascia di età (select)
- Il prezzo viene **stampato in pagina** con recap dettagliato.
- Il prezzo è **formattato con massimo due decimali**.

### ✅ Milestone 3 - Styling (CSS)
- Aggiunta di **stile grafico** per rendere l’interfaccia gradevole e leggibile:
  - Utilizzo di Bootstrap o CSS personalizzato
  - Presentazione visiva del biglietto generato


## Tecnologie Utilizzate

- HTML5
- CSS3 / Bootstrap 5
- JavaScript (Vanilla JS)


## Istruzioni per l'Uso

1. Apri `index.html` in un browser.
2. Inserisci:
   - Nome e Cognome
   - Numero di chilometri da percorrere
   - Fascia di età
3. Clicca su **"Genera"** per visualizzare il biglietto.
4. Clicca su **"Annulla"** per resettare il form e cancellare il biglietto.


## Funzionalità Extra

- Generazione casuale di:
  - Numero carrozza
  - Codice CP del biglietto
- Pulsante "Annulla" che resetta i campi e nasconde il biglietto.




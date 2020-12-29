# Guida per la navigazione del progetto

## Nota:
Quest guida è ancora una bozza ed in una fase d sviluppo iniziale

### Denominazione

I nomi nei attributi test-id prendono nomi delle componeneti senza aggiungere
altro testo

### Struttura delle cartelle

* la cartella Componenti contiene tutti i componenti del sito
* la cartella pages contiene tutti le pagine del sito
* la cartella utils contiene tutte le funzioni d'aiuto

Le cartelle condividono una struttura simile.
Esempio: 
Componenti/
    -Libreria/
        - Caricamento/
            - index.js
            - caricamento.test.js
            - config.js

Libreria è la cartella principale
Caricamento è la cartella della componente
index.js è il componente stesso
caricamento.test.js è il file dello test
config.js contiene cose che sono condivise tra il file del test e componente stesso

### Export

Non si esporta un oggetto di default che contiene i componenti ma si esportano i componenti
separatamente, come nell'esempio qui sotto:

No:
export default { 
    Componente1, Componente2
}

Si:
export Componente1
export default Componente2 //Se necessario esportare un componente di default
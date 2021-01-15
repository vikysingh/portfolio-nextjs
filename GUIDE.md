# Guida per la navigazione del progetto

## Nota:
Quest guida è ancora una bozza ed in una fase di elaborazione continua.

### Navigazione cartelle
* La cartella "Componenti" contiene tutti i componenti del sito
* La cartella "portfoliostudio" contiene lo studio di sanity.io(CMS)
* La cartella "public" contiene i file pubblici e statici.
* La cartella "pages" contiene le pagine del sito


##### Cartella "Componenti"
La cartella, concettualmente, è divisa in due parti:
la sottocartella "Libreria" contiene componenti che possono essere utilizzati in tutte le pagine;
il resto delle sottocartelle contengono componenti specifici alle pagine/route;


###### Struttura
Il nome della cartella indica il nome del componente invece il file "index.js" è il file contiene il componente stesso. La cartella potrebbe contenere altri due file
"config.js" e "[nome componente].test.js".
Il primo indica i dati che condividono il file "index.js" e "[nome componente].test.js" come, per esempio, props o valori di alcuni attributi. Il secondo è il file test per il componente.

Esempio:
Componenti/
    -Libreria/
        -Caricamento/
            -index.js
            -config.js
            -caricamento.test.js
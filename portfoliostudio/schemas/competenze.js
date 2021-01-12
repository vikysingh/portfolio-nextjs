export default {
    title: "Competenze",
    name: "competenze",
    type: 'document',
    fields: [
        //Un paragrafo descrittivo per le competenze
        {
            name: 'competenze_descrizione',
            title: 'Descrizione competenze',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'titolo',
            title: 'TItolo',
            type: 'string'
        },
        //Array per le competenze
        {
            name: "competenza",
            title: "Competenza",
            type: 'array',
            of: [{type: 'string'}]
        }
    ]
}
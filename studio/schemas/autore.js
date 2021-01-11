export default {
  name: 'autore',
  title: 'Autore',
  type: 'document',
  fields: [
    //Nome dell'autore
    {
      name: 'nome',
      title: 'Nome',
      type: 'string',
    },
    //Foto dell'autore
    {
      name: 'foto',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    //Bio dell'autore
    {
      title: 'Bio', 
      name: 'bio',
      type: 'array', 
      of: [{type: 'block'}]
    },
    //Un paragrafo per le competenze
    {
      name: 'competenze_descrizione',
      title: 'Descrizione competenze',
      type: 'array',
      of: [{type: 'block'}]
    },
    //Link del CV
    {
      title: 'CVLink',
      name: 'cvlink',
      type: 'string'
    },
    //Competenze
    {
      title: 'Competenza',
      name: 'competenza',
      type: 'array',
      of: [{type: 'string'}]
    },
    //Progetti
    {
      title: 'Progetti',
      name: 'progetti',
      type: 'array',
      of: [{
        title: 'Progetto',
        type: 'object',
        fields: [
          {
            title: 'Nome Progetto',
            name: 'nome_progetto',
            type: 'string'
          },
          {
            title: 'Link Progetto',
            name: 'link_progetto',
            type: 'string'
          },
          {
            title: 'Tema',
            name: 'tema',
            type: 'string'
          }
        ]
      }]
    }
  ],
  preview: {
    select: {
      title: 'nome',
      media: 'foto',
    },
  },
}

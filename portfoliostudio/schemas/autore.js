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
    //Link del CV
    {
      title: 'CVLink',
      name: 'cvlink',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'nome',
      media: 'foto',
    },
  },
}
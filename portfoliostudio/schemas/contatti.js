export default {
    title: 'Contatti',
    name: 'contatti',
    type: 'document',
    fields: [
        {
            title: 'Titolo',
            name: 'titolo',
            type: 'string'
        },
        {
            title: 'Descrizione',
            name: 'descrizione',
            type: 'string'
        },
        {
            title: 'Email',
            name: 'email',
            type: 'string'
        },
        {
            title: 'Telefono',
            name: 'telefono',
            type: 'string'
        },
        /* Link sociali: GitHub, Medium, YouTube, LinkedIn */
        {
          title: 'GitHub link',
          name: 'github_link',
          type: 'string'
        },
        {
          title: 'Medium link',
          name: 'medium_link',
          type: 'string'
        },
        {
          title: 'YouTube link',
          name: 'youtube_link',
          type: 'string'
        },
        {
          title: 'LinkedIn link',
          name: 'linkedin_link',
          type: 'string'
        },
    ]
}
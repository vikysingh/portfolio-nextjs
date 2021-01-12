export default {
    title: 'Progetti',
    name: 'progetti',
    type: 'document',
    fields: [{
      title: 'Progetti',
      name: "progetti",
      type: 'array',
      of: [
          {
              name: "progetto",
              title: "Progetto",
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
          },
      ]
    }]
  }
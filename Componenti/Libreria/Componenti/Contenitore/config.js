export default {
    'data-testid': "contenitore",
    child: {
        primoRow: {
            'data-testid': "contenitore-primo_row"
        },
        secondoRow: {
            'data-testid': "contenitore-secondo_row",
            child: {
                primoCol: {
                    "data-testid": "contenitore-secondo_row-primo_col",
                    heading: {
                        "data-testid": "contenitore-secondo_row-primo_col-heading"
                    },
                    paragrafo: {
                        "data-testid": "contenitore-secondo_row-primo_col-paragrafo"
                    },
                    footer: {
                        "data-testid": "contenitore-secondo_row-primo_col-footer"
                    }
                },
                secondoCol: {
                    "data-testid": "contenitore-secondo_row-secondo_col"
                }
            }
        }
    },
    props: {
        primo: "Primo",
        titolo: "Titolo",
        paragrafo: "Paragrafo",
        footer: "Footer",
        sinistra: "colonna sinistra"
    }
}
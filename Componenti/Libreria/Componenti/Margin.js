import styled, { css } from "styled-components"

const Margin = styled.div`
margin: 5%;

${({pady}) => pady && css`
    margin-top: pady;
    margin-bottom: pady;
    `
}

${({padx}) => padx && css`
    margin-left: padx;
    margin-right: padx;
    `
}

${({sinistra}) => sinistra && css`
    margin-left: sinistra;
    `
}

${({destra}) => destra && css`
    margin-right: destra;
    `
}

${({sopra}) => sopra && css`
    margin-top: sopra;
    `
}

${({sotto}) => sotto && css`
    margin-bottom: sotto;
    `
}

@media only screen and(max-width: 600px) {
    ${({padySM}) => padySM && css`
    margin-top: padySM;
    margin-bottom: padySM;
    `
}

${({padxSM}) => padxSM && css`
    margin-left: padxSM;
    margin-right: padxSM;
    `
}

${({sinistraSM}) => sinistraSM && css`
    margin-left: sinistraSM;
    `
}

${({destraSM}) => destraSM && css`
    margin-right: destraSM;
    `
}

${({sopraSM}) => sopra && css`
    margin-top: sopraSM;
    `
}

${({sottoSM}) => sottoSM && css`
    margin-bottom: sottoSM;
    `
}
}

`

export default Margin
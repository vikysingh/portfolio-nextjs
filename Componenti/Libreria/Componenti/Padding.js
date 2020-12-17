import styled, { css } from "styled-components"

const Padding = styled.div`
padding: 5%;

${({pady}) => pady && css`
    padding-top: pady;
    padding-bottom: pady;
    `
}

${({padx}) => padx && css`
    padding-left: padx;
    padding-right: padx;
    `
}

${({sinistra}) => sinistra && css`
    padding-left: sinistra;
    `
}

${({destra}) => destra && css`
    padding-right: destra;
    `
}

${({sopra}) => sopra && css`
    padding-top: sopra;
    `
}

${({sotto}) => sotto && css`
    padding-bottom: sotto;
    `
}

@media only screen and(max-width: 600px) {
    ${({padySM}) => padySM && css`
    padding-top: padySM;
    padding-bottom: padySM;
    `
}

${({padxSM}) => padxSM && css`
    padding-left: padxSM;
    padding-right: padxSM;
    `
}

${({sinistraSM}) => sinistraSM && css`
    padding-left: sinistraSM;
    `
}

${({destraSM}) => destraSM && css`
    padding-right: destraSM;
    `
}

${({sopraSM}) => sopra && css`
    padding-top: sopraSM;
    `
}

${({sottoSM}) => sottoSM && css`
    padding-bottom: sottoSM;
    `
}
}

`

export default Padding
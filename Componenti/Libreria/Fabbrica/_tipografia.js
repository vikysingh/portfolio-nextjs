export function Heading1_2(colore, bold, variato) {
    return `color: ${colore === "rosso" ? "#FF1791" : "initial"};font-weight: ${bold ? "bolder" : "initial"};font-family: ${variato ? "Playfair Display" : "Quicksand"}, sans-serif;
    `
}

export function Heading3_4_paragrafo(colore, bold) {
    return `&, a {color: ${colore === "scuro" ? "#646464":colore === "chiaro" ? "#ffffff" : "initial"};font-weight: ${bold ? "bolder" : "normal"};}
    `
}

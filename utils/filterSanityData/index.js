export default function filterSanityData(lista = [{}], tipo = "") {
    return lista.filter(elemento => elemento._type == tipo)
}

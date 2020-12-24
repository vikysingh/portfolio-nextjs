export default function sanityFilter(array = [], tipo = "") {
    return array.filter(elemento => elemento._type == tipo)
}
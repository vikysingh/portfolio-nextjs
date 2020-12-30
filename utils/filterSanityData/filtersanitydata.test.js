import filterSanityData from "./index"

const lista = [{tipo: "Test1"}, {tipo: "Test2"}, {tipo: "Test3"}]
const tipo = "Test2"

test("Test della funzione filterSanityData", () => {
    expect(filterSanityData(lista, tipo)).toEqual([])
})
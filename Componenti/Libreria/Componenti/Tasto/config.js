export default {
    "data-testid": "tasto",
    props: {
        testo: "Tasto test",
        primario: true,
        secondario: true
    },
    style: {
        stylePrimario: {
            //Styling del prop primario
            background: ["rgb(255,23,145)",
            "-moz-linear-gradient(90deg, rgba(255,23,145,1) 0%, rgba(204,23,255,1) 100%)",
            "-webkit-linear-gradient(90deg, rgba(255,23,145,1) 0%, rgba(204,23,255,1) 100%)",
            "linear-gradient(90deg, rgba(255,23,145,1) 0%, rgba(204,23,255,1) 100%)"],
            color: "#fff"
        },
        styleSecondario: {
            //Stling del prop secondario
            border: "2px solid #FF1791"
        }
    }
}
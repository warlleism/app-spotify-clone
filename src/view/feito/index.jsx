import Container from "../../../components";

const Feito = () => {

    const tocadasRecentemente = [
        {
            id: 1,
            img: require("../../../imagens/mix/img1.png"),
            dsc: "Polaris, Inertia, Voices From The Fuselage e mais...",
            borderColor: "#065fd4"

        },
        {
            id: 2,
            img: require("../../../imagens/mix/img2.png"),
            dsc: "STARSET, Asking Alexandria, Crown the...",
            borderColor: "#ffff"
        },
        {
            id: 3,
            img: require("../../../imagens/mix/img3.png"),
            dsc: "Slayer, Megadeth, Metallica e mais",
            borderColor: "#DD614A"
        },
        {
            id: 4,
            img: require("../../../imagens/mix/img4.png"),
            dsc: "Queen, TOTO, R.E.M e mais",
            borderColor: "#ebdf07"

        },
        {
            id: 5,
            img: require("../../../imagens/mix/img5.png"),
            dsc: "ANGRA, Dream Theater, Within Temptation e mais",

            borderColor: "#73A580"
        },
        {
            id: 6,
            img: require("../../../imagens/mix/img6.png"),
            dsc: "Slipknot, Trivium, As I Lay Dying e mais",
            borderColor: "#F4A698"
        },
    ]

    return (
        <>
            <Container imagens={tocadasRecentemente} titulo={"Feito para Warllei Martins"} fontSize={14} fontWeight={"400"} color={"#a09c9c9e"} />
        </>
    )
}

export default Feito;
import Container from "../../../components";

const Mixes = () => {

    const tocadasRecentemente = [
        {
            id: 1,
            img: require("../../../imagens/spiritbox/spiritbox.jpg"),
            dsc: "Annisokay, Polaris, Thornhill e mais",
            nome: "Spiritbox",
            borderColor: "#DD614A"

        },
        {
            id: 2,
            img: require("../../../imagens/alterbridge/alter-bridge.jpg"),
            dsc: "Trivium, Breaking Benjamin, Seether e mais",
            nome: "Alter Bridge",
            borderColor: "#73A580"
        },
        {
            id: 3,
            img: require("../../../imagens/ironmainden/Iron-maiden.jpg"),
            dsc: "Helloween, Angra, Kamelot, DragonForce e mais",
            nome: "Iron Maiden",
            borderColor: "#065fd4"
        },
        {
            id: 4,
            img: require("../../../imagens/nigthwish/nigthwish.jpg"),
            dsc: "Epica, Rhapsod, Haggard, Symphony X e mais",
            nome: "Nigthwish",
            borderColor: "#F4A698"

        },
        {
            id: 5,
            img: require("../../../imagens/killswitchengage/killswitch-engage.jpg"),
            dsc: "Memphis may fire, Bring Me the Horizon, Architects e mais",
            nome: "Killswitch Engage",
            borderColor: "#ffff"
        },
        {
            id: 6,
            img: require("../../../imagens/lornashore/lorna-shore.jpg"),
            dsc: "Suicide Silence, Chelsea Grin, Slaughter to Prevail e mais",
            nome: "Lorna Shore",
            borderColor: "#ebdf07"
        },
        {
            id: 7,
            img: require("../../../imagens/megadeth/megadeth.jpg"),
            dsc: "Metallica, Slayer, Testament e mais",
            nome: "Megadeth",
            borderColor: "#c1de26"
        },
    ]

    return (
        <>
            <Container imagens={tocadasRecentemente} titulo={"Seus mixes mais ouvidos"} fontSize={14} fontWeight={"400"} color={"#a09c9c9e"} />
        </>
    )
}

export default Mixes;
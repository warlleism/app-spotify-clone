import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

const Estacoes = () => {

    const estacoesRecomentadas = [
        {
            id: 1,
            img: require("../../../imagens/memphismayfire/memphismayfire.jpg"),
            nome: "Memphis May Fire",
            dsc: "Crown the Empire, Inertia, Of Mice & Men e mais...",
            borderColor: "#065fd4"

        },
        {
            id: 2,
            img: require("../../../imagens/metallica/metallica.jpg"),
            nome: "Metallica",
            dsc: "Rammstein, Slayer, Megadeth e mais...",
            borderColor: "#ffff"
        },
        {
            id: 3,
            img: require("../../../imagens/slipknot/Slipnkot.jpg"),
            nome: "Slipknot",
            dsc: "Korn, System of a Down, Linkin Park e mais...",
            borderColor: "#DD614A"
        },
        {
            id: 4,
            img: require("../../../imagens/inertia/inertia.png"),
            nome: "Inertia",
            dsc: "Polaris, Parkway Drive, Architects, Unearth e mais...",
            borderColor: "#ebdf07"

        },
        {
            id: 5,
            img: require("../../../imagens/periphery/periphery.png"),
            nome: "Periphery",
            dsc: "Persofone, Dream Theater, Born Of Osiris e mais...",
            borderColor: "#73A580"
        },
        {
            id: 6,
            img: require("../../../imagens/trivium/trivium.png"),
            nome: "Trivium",
            dsc: "Lamb Of God, Arch Enemy, Disturbed e mais...",
            borderColor: "#F4A698"
        },

    ]

    return (
        <>
            <SafeAreaView style={{ width: "100%" }}>

                <View style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between", height: 100, alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center', color: "#ffff", fontSize: 23, fontWeight: "900", marginLeft: 20 }}>Estações recomendadas</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        estacoesRecomentadas.map((imagens) => {
                            return (
                                <TouchableOpacity onPress={() => console.log("teste")} key={imagens.dsc} style={{ width: 170, marginLeft: 10, marginRight: 10, position: "relative" }}>
                                    <View style={{ borderBottomColor: "yellow", borderBottomWidth: 4, }}>

                                        <Image source={imagens.img} style={{ width: "100%", height: 160, }} />

                                        <View style={{ position: "absolute", top: 10, alignSelf: "center" }}>
                                            <Text style={{ textAlign: "center", color: "#ffff", fontWeight: "800", fontSize: 15 }}>{imagens.nome}</Text>
                                            <Text style={{ textAlign: "center", color: "#ffff", fontWeight: "500" }}>Rádio</Text>
                                        </View>

                                    </View>
                                    <Text style={{ width: "100%", color: "#a09c9c9e", marginTop: 6, fontSize: 14, fontWeight: "400" }}>{imagens.dsc}</Text>

                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>

            </SafeAreaView>
        </>
    )
}

export default Estacoes;
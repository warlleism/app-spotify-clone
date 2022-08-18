import { useState } from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import Navegacao from '../../../components/navegacao';
import IconAntDesign from "react-native-vector-icons/AntDesign";

const { height } = Dimensions.get("window")

const Novidades = () => {

    const [altura, setAltura] = useState()

    const novidades = [
        {
            img: require("../../../imagens/novidades/megadeth-soldir-on.jpg"),
            dsc: "Soldier On! Night Stalkers / We`ll Be Back",
            nome: "Megadeth",
            tipo: "Single"
        },
        {
            img: require("../../../imagens/novidades/hammersmith-scorpions.png"),
            dsc: "Hammersmith (UK Bonus Track)",
            nome: "Scorpions",
            tipo: "Single"
        },
        {
            img: require("../../../imagens/novidades/oln-goes-2000s.jpg"),
            dsc: "OLN Goes 2000's",
            nome: "Our Last Night",
            tipo: "Single"
        },
        {
            img: require("../../../imagens/novidades/dream-theater-lost-not-forgotten-archives.png"),
            dsc: "Lost not Forgotten Archives: Live in Berlin (2029)",
            nome: "Dream Theater",
            tipo: "Álbum"
        },
        {
            img: require("../../../imagens/novidades/slunghter-to-prevail-1984.png"),
            dsc: "1984",
            nome: "Slunghter to Prevail",
            tipo: "Single"
        },
        {
            img: require("../../../imagens/novidades/miss-may-i-free-fall.png"),
            dsc: "Free fall",
            nome: "Mis May i",
            tipo: "Single"
        },
        {
            img: require("../../../imagens/novidades/slipknot-yen.png"),
            dsc: "Yen",
            nome: "Slipknot",
            tipo: "Single"
        },
    ]
    return (
        <>
            <View style={{ height: 90 }}>
                <Navegacao route={"Home"} icon={"left"} color={"#ffff"} x={altura >= 84 ? 2 : 0.3} />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                scrollEnabled
                onScroll={(event) => setAltura(parseInt(event.nativeEvent.contentOffset.y))}
                style={{ height: height * 2, backgroundColor: "black" }}>
                <View style={{ padding: 20 }}>
                    <Text style={{ color: "#ffff", fontSize: 25, fontWeight: "800" }}>Novidades</Text>
                    <Text style={{ color: "#ffff", fontSize: 12 }}>Os últimos lançamentos dos artistas, podcasts e programas...</Text>
                    <View style={{ display: 'flex', flexDirection: "row", marginTop: 10 }}>
                        <Text style={{ borderWidth: 1, borderColor: "#ffff", borderRadius: 50, paddingHorizontal: 15, paddingVertical: 5, color: "#ffff", fontSize: 13, fontWeight: "500", marginRight: 20 }}>Músicas</Text>
                        <Text style={{ borderWidth: 1, borderColor: "#ffff", borderRadius: 50, paddingHorizontal: 15, paddingVertical: 5, color: "#ffff", fontSize: 13, fontWeight: "500" }}>Podcasts e programas</Text>
                    </View>
                </View>

                <Text style={{ color: "#ffff", marginLeft: 20, marginBottom: 20, fontSize: 20, fontWeight: "600" }}>Antigos</Text>
                {
                    novidades.map((data) => {
                        return (
                            <View key={data.nome} style={{ borderWidth: 1, borderBottomColor: "#a09c9c9e" }}>

                                <TouchableOpacity onPress={() => console.log("teste")} style={{ display: 'flex', flexDirection: 'row', marginBottom: 20, marginTop: 20 }}>

                                    <View style={{ marginLeft: 15, marginBottom: 10 }}>
                                        <Image source={data.img} style={{ width: 90, height: 90, marginRight: 10 }} />
                                        <Text style={{ color: "#ffff", fontSize: 10, marginTop: 5 }}>{data.tipo}</Text>
                                    </View>

                                    <View>
                                        <Text style={{ marginBottom: 5, color: "#ffff", fontWeight: "600", width: "60%", marginBottom: 5 }}>{data.dsc}</Text>
                                        <Text style={{ color: "#a09c9c9e" }}>{data.nome}</Text>
                                    </View>

                                </TouchableOpacity>

                                <View style={{ marginLeft: 20, marginRight: 20, marginBottom: 10, display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>

                                    <View style={{ display: 'flex', flexDirection: "row" }} >

                                        <TouchableOpacity onPress={() => console.log("teste")}>
                                            <IconAntDesign size={28} name='hearto' style={{ color: "#ffff" }} />
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => console.log("teste")}>
                                            <Text style={{ color: "#ffff", fontSize: 23, marginLeft: 20 }}>︙</Text>
                                        </TouchableOpacity>

                                    </View>

                                    <TouchableOpacity onPress={() => console.log("teste")}>
                                        <IconAntDesign size={28} name='playcircleo' style={{ color: "#ffff" }} />
                                    </TouchableOpacity>

                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </>
    );
}

export default Novidades;
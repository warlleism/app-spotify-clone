import { useState } from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import Navegacao from '../../../components/navegacao';
import IconAntDesign from "react-native-vector-icons/AntDesign";

const { height } = Dimensions.get("window")

const Recente = () => {

    const [altura, setAltura] = useState()

    const novidades = [
        {
            img: require("../../../imagens/periphery/Peripheryi.jpg"),
            dsc: "Periphery I",
            nome: "Periphery",
            musica: "Ligth",
        },
        {
            img: require("../../../imagens/periphery/Peripheryiii.jpg"),
            dsc: "Periphery III : Select Difficulty",
            nome: "Periphery",
            musica: "The Price is Wrong",
        },
        {
            img: require("../../../imagens/periphery/Peripheryii.jpg"),
            dsc: "Periphery II: This Time It's Personal",
            nome: "Periphery",
            musica: "MAKE TOTAL DESTROY",
        },
        {
            img: require("../../../imagens/novidades/dream-theater-lost-not-forgotten-archives.png"),
            dsc: "Lost not Forgotten Archives: Live in Berlin (2029)",
            nome: "Dream Theater",
            musica: "The Best Of Times",
        },
        {
            img: require("../../../imagens/novidades/slunghter-to-prevail-1984.png"),
            dsc: "1984",
            nome: "Slunghter to Prevail",
            musica: "DEMOLISHER",
        },
        {
            img: require("../../../imagens/novidades/miss-may-i-free-fall.png"),
            dsc: "Free fall",
            nome: "Mis May i",
            musica: "Free fall"
        },
        {
            img: require("../../../imagens/novidades/slipknot-yen.png"),
            dsc: "Yen",
            nome: "Slipknot",
            musica: "Yen",
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
                    <Text style={{ color: "#ffff", fontSize: 19, fontWeight: "800" }}>Tocadas Recentemente</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{ display: 'flex', flexDirection: "row", marginTop: 10 }}>
                            <TouchableOpacity onPress={() => console.log("Teste")}>
                                <Text style={{ borderWidth: 1, borderColor: "#ffff", borderRadius: 50, paddingHorizontal: 15, paddingVertical: 5, color: "#ffff", fontSize: 13, fontWeight: "500", marginRight: 7 }}>Podcasts e programas</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => console.log("Teste")}>
                                <Text style={{ borderWidth: 1, borderColor: "#ffff", borderRadius: 50, paddingHorizontal: 15, paddingVertical: 5, color: "#ffff", fontSize: 13, fontWeight: "500", marginRight: 7}}>Playlists</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => console.log("Teste")}>
                                <Text style={{ borderWidth: 1, borderColor: "#ffff", borderRadius: 50, paddingHorizontal: 15, paddingVertical: 5, color: "#ffff", fontSize: 13, fontWeight: "500", marginRight: 7 }}>Álbuns</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => console.log("Teste")}>
                                <Text style={{ borderWidth: 1, borderColor: "#ffff", borderRadius: 50, paddingHorizontal: 15, paddingVertical: 5, color: "#ffff", fontSize: 13, fontWeight: "500" }}>Músicas</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
                {
                    novidades.map((data) => {
                        return (
                            <>
                                <View key={data.musica}>
                                    <TouchableOpacity onPress={() => console.log("teste")} style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
                                        <View style={{ marginLeft: 15, marginBottom: 10 }}>
                                            <Image source={data.img} style={{ width: 90, height: 90 }} />
                                        </View>
                                        <View>
                                            <Text style={{ marginBottom: 5, color: "#ffff", fontWeight: "600", width: "100%", marginBottom: 5, marginLeft: 10 }}>{data.dsc}</Text>
                                            <Text style={{ color: "#a09c9c9e", marginLeft: 10 }}>Album • {data.nome}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginLeft: 30 }}>
                                    <TouchableOpacity onPress={() => console.log("teste")} style={{ display: 'flex', flexDirection: 'row', marginBottom: 20, marginTop: 20, justifyContent: "space-between" }}>
                                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                                            <View style={{ marginLeft: 15, marginBottom: 10 }}>
                                                <Image source={data.img} style={{ width: 70, height: 70, marginRight: 10 }} />
                                            </View>
                                            <View>
                                                <Text style={{ marginBottom: 5, color: "#ffff", fontWeight: "600", width: "100%", marginBottom: 5 }}> {data.musica}</Text>
                                                <Text style={{ color: "#a09c9c9e" }}>Música • {data.nome}</Text>
                                            </View>
                                        </View>

                                        <TouchableOpacity onPress={() => console.log("teste")}>
                                            <Text style={{ color: "#ffff", fontSize: 23, marginRight: 10 }}>︙</Text>
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )
                    })
                }
            </ScrollView>
        </>
    );
}

export default Recente;
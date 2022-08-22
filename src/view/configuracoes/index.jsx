import { useState } from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Navegacao from '../../../components/navegacao';
import SwitchButton from '../../../components/switch'
import IconAntDesign from "react-native-vector-icons/AntDesign";

const { height } = Dimensions.get("window")

const Configuracoes = () => {

    const [altura, setAltura] = useState()

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

                    <Text style={{ color: "#ffff", marginBottom: 9, fontWeight: "800" }}>Conta</Text>

                    <TouchableOpacity onPress={() => console.log("teste")}>
                        <Text style={{ color: "#ffff", fontWeight: "600" }}>Plano Premium</Text>
                        <Text style={{ color: "#979292f0", fontSize: 12 }}>Veja seu plano</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log("teste")}>
                        <Text style={{ color: "#ffff", marginTop: 9, fontWeight: "600" }}>E-mail</Text>
                        <Text style={{ color: "#979292f0", fontSize: 12 }}>warlleimartins@hotmail.com</Text>
                    </TouchableOpacity>

                    <View style={{ marginTop: 30 }}>
                        <Text style={{ color: "#ffff", marginBottom: 9, fontWeight: "800" }}>Economia de dados</Text>

                        <View style={{ display: 'flex', flexDirection: "row", marginTop: 15 }}>

                            <View style={{ width: "85%" }}>
                                <Text style={{ color: "#ffff" }}>Qualidade do áudio</Text>
                                <Text style={{ color: "#979292f0" }}>Define a quantidade do áudio com baixa (equivalente a 24 kbits/s) e desativa o Canvas dos artistas.</Text>
                            </View>

                            <View style={{ width: "15%" }}>
                                <SwitchButton />
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <Text style={{ color: "#ffff", marginBottom: 20, fontWeight: "800" }}>Podcasts em vídeo</Text>

                        <View style={{ display: 'flex', flexDirection: "row", marginBottom: 20 }}>
                            <View style={{ width: "85%" }}>
                                <Text style={{ color: "#ffff" }}>Baixar somente o áudio</Text>
                                <Text style={{ color: "#979292f0" }}>Salve apenas o àudio dos podcasts em vídeo.</Text>
                            </View>

                            <View style={{ width: "15%" }}>
                                <SwitchButton />
                            </View>
                        </View>

                        <View style={{ display: 'flex', flexDirection: "row" }}>
                            <View style={{ width: "85%" }}>
                                <Text style={{ color: "#ffff", width: "85%" }}>Reproduzir apenas o áudio</Text>
                                <Text style={{ color: "#979292f0", width: "85%" }}>Curta apenas a áudio dos podcasts em vídeo quando não estiver no WI-Fi.</Text>
                            </View>

                            <View style={{ width: "15%" }}>
                                <SwitchButton />
                            </View>
                        </View>

                    </View>

                    <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center', marginTop: 13 }}>
                        <IconAntDesign name='infocirlceo' size={10} style={{ color: "#ffff", marginRight: 10 }} />
                        <Text style={{ color: "#979292f0", fontSize: 13 }}>Observações: o vídeo não é reproduzido quando o app Spotify está em segundo plano</Text>
                    </View>

                </View>

            </ScrollView>
        </>
    );
}

export default Configuracoes;
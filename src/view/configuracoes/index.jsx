import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import Navegacao from '../../../components/navegacao';
import SwitchButton from '../../../components/switch'
import Slider from '@react-native-community/slider';


const { height } = Dimensions.get("window")

const Configuracoes = () => {

    const [altura, setAltura] = useState()
    const [duracao, setDuracao] = useState()

    const [reproducao] = useState(['Automático', 'Baixa', 'Normal', 'Alta', 'Altíssima'])
    const [reproducaoSelecionadaWifi, setReproducaoSelecionadaWifi] = useState([])
    const [reproducaoSelecionadaMoveis, setReproducaoSelecionadaMoveis] = useState([])

    const Select = (valor, setData) => {
        return (
            <Picker
                style={{ backgroundColor: "#d4d4d442", color: "#ffff" }}
                mode={'dropdown'}
                selectedValue={valor}
                onValueChange={(item) =>
                    setData(item)
                }>
                {reproducao.map((data) => {
                    return <Picker.Item key={data} label={data} value={data} />
                })}
            </Picker>
        )
    }

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

                    <View style={{ marginTop: 30 }}>

                        <Text style={{ color: "#ffff", marginBottom: 20, fontWeight: "800" }}>Reprodução</Text>
                        <Text style={{ color: "#ffff", fontWeight: "600" }}>Modo offline</Text>

                        <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                            <View style={{ width: "85%" }}>
                                <Text style={{ color: "#979292f0", fontSize: 13 }}>Quando você fica offline, só pode tocar as músicas e podcasts baixados.</Text>
                            </View>
                            <View style={{ width: "15%" }}>
                                <SwitchButton />
                            </View>
                        </View>

                    </View>

                    <View style={{ display: 'flex', marginTop: 20 }}>

                        <Text style={{ color: "#ffff", fontWeight: "600" }}>Transição gradual</Text>
                        <Text style={{ color: "#979292f0", fontSize: 13 }}>Permite fazer transição gradual de música</Text>

                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: "#979292f0", fontSize: 13 }}>Desligado</Text>
                            <Slider
                                style={{ width: "80%", height: 40 }}
                                minimumValue={0}
                                maximumValue={50}
                                minimumTrackTintColor={"#979292f0"}
                                onValueChange={(value) => setDuracao(value)}
                            />
                            <Text style={{ color: "#979292f0", fontSize: 13 }}>{Math.round(duracao)}s</Text>
                        </View>

                    </View>

                    <View style={{ marginTop: 30 }}>

                        <Text style={{ color: "#ffff", fontWeight: "600" }}>Sem pause</Text>

                        <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                            <View style={{ width: "85%" }}>
                                <Text style={{ color: "#979292f0", fontSize: 13 }}>Permite a Reprodução sem pausas</Text>
                            </View>
                            <View style={{ width: "15%" }}>
                                <SwitchButton />
                            </View>
                        </View>

                    </View>

                    <View style={{ marginTop: 30 }}>

                        <Text style={{ color: "#ffff", fontWeight: "800", marginBottom: 20 }}>Qualidade do áudio</Text>

                        <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                            <View style={{ width: "60%" }}>
                                <Text style={{ color: "#ffff", fontSize: 16 }}>Reprodução com Wi-Fi</Text>
                            </View>
                            <View style={{ width: "40%", marginLeft: 10 }}>
                                {Select(reproducaoSelecionadaWifi, setReproducaoSelecionadaWifi)}
                            </View>
                        </View>

                    </View>

                    <View style={{ marginTop: 30 }}>

                        <Text style={{ color: "#ffff", fontSize: 16, width: "55%" }}>Reprodução com dados móveis</Text>

                        <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                            <View style={{ width: "60%" }}>
                                <Text style={{ color: "#979292f0", fontSize: 13 }}>Quanto maior a qualidade do áudio dos streamings, maior será o consumo de dados móveis.</Text>
                            </View>
                            <View style={{ width: "40%", marginLeft: 10 }}>
                                {Select(reproducaoSelecionadaMoveis, setReproducaoSelecionadaMoveis)}
                            </View>
                        </View>

                    </View>

                </View>

            </ScrollView>
        </>
    );
}

export default Configuracoes;
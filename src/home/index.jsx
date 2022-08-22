import { Animated, SafeAreaView, ScrollView, Image, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconIonicons from "react-native-vector-icons/Ionicons";
import IconEntypo from "react-native-vector-icons/Entypo";
import Estacoes from '../view/estacoes';
import Header from '../view/header';
import Mixes from '../view/mixes';
import Feito from '../view/feito';
import Play from '../view/play';

const Home = () => {

    const [color, setColor] = useState("")
    const [data, setData] = useState([])
    const [play, setPlay] = useState(true)
    const [status, setStatus] = useState(false)
    const [dataStatus, setDataStatus] = useState(true)
    const [musicas, setMusicas] = useState()
    const [posicao] = useState(new Animated.Value(1200))
    const [heart, setHeart] = useState(true)


    function Animacao() {
        setStatus(true)
        setDataStatus(false)
    }

    function AnimacaoPlay() {

        Animated.timing(
            posicao,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            },
        ).start();

    }

    const EsconderConteudo = () => {
        setDataStatus(true);
        setStatus(false);
    }

    const GetColor = (value) => {
        setColor(value);
    }

    const GetData = (value) => {
        setData(value);
    }

    const getMusicas = (...parans) => {
        setMusicas(...parans);
        setPlay(false);
        AnimacaoPlay();
    }

    return (
        <SafeAreaView>
            <LinearGradient end={{ x: 0.3, y: 0.2 }} colors={[color == "" ? "#1f232aeb" : color, 'black']}>

                <ScrollView>
                    {dataStatus &&
                        (<>
                            <Header color={GetColor} data={GetData} animacao={Animacao} />
                            <Mixes />
                            <Feito />
                            <Estacoes />
                        </>)
                    }
                </ScrollView>

                {status &&
                    (<View>
                        <View>
                            <Play musicas={getMusicas} dados={data} color={color} status={EsconderConteudo} />
                        </View>
                    </View>)
                }

                <View>
                    {
                        musicas?.map((data) => {
                            return (
                                <Animated.View key={data?.id} style={{
                                    position: "absolute",
                                    bottom: 0,
                                    transform: [{ translateX: posicao }],
                                    display: "flex", flexDirection: "row",
                                    alignItems: "center",
                                    backgroundColor: data?.color,
                                    padding: 10,
                                    borderRadius: 10,
                                    width: "100%"
                                }} >

                                    <View>
                                        <Image source={data?.img} style={{ width: 40, height: 40, alignSelf: 'center' }} />
                                    </View>

                                    <View style={{ width: "60%" }}>
                                        <Text style={{ color: "#ffff", fontSize: 13, marginLeft: 5 }}>{data?.musica}</Text>
                                        <Text style={{ color: "#ffff", fontSize: 13, marginLeft: 5 }}>{data?.nome}</Text>
                                    </View>

                                    <View style={{ display: "flex", flexDirection: "row" }}>

                                        <TouchableOpacity onPress={() => console.log("teste")}>
                                            <MaterialCommunityIcons name="cellphone-sound" size={30} style={{ color: "#ffff", marginRight: 8 }} />
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => setHeart(!heart)}>
                                            {heart ? <MaterialCommunityIcons name="cards-heart-outline" size={30} style={{ color: "#ffff", marginRight: 8 }} /> : <MaterialCommunityIcons name="heart" size={30} style={{ color: "#30d045", marginRight: 8 }} />}
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => console.log("teste")}>
                                            {play ? <IconEntypo onPress={() => setPlay(false)} name="controller-play" size={30} style={{ color: "#ffff", height: 32 }} /> : <IconIonicons onPress={() => setPlay(true)} name="pause-sharp" size={30} style={{ color: "#ffff", height: 32 }} />}
                                        </TouchableOpacity>

                                    </View>
                                    
                                </Animated.View>
                            )
                        })
                    }
                </View>

            </LinearGradient>
            <StatusBar style="light" />
        </SafeAreaView>
    );
}

export default Home;
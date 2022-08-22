import { Animated, SafeAreaView, ScrollView, Image, Text, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconEntypo from "react-native-vector-icons/Entypo";
import Header from '../view/header';
import Mixes from '../view/mixes';
import Feito from '../view/feito';
import Estacoes from '../view/estacoes';
import Play from '../view/play';

const { width } = Dimensions.get("window")
const { height } = Dimensions.get("window")

const Home = () => {

    const [color, setColor] = useState("")
    const [data, setData] = useState([])
    const [status, setStatus] = useState(false)
    const [dataStatus, setDataStatus] = useState(true)
    const [musicas, setMusicas] = useState()
    const [posicao, setPosicao] = useState(new Animated.Value(0))

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
        setDataStatus(true)
        setStatus(false)
    }

    const GetColor = (value) => {
        setColor(value)
    }

    const GetData = (value) => {
        setData(value)
    }

    const getMusicas = (nome, musica, imagem) => {
        setMusicas(nome, musica, imagem)
        AnimacaoPlay()
    }

    useEffect(() => {
        console.log(musicas)
    }, [musicas])
    return (
        <SafeAreaView>
            <LinearGradient
                end={{ x: 0.3, y: 0.2 }}
                colors={[color == "" ? "#1f232aeb" : color, 'black']}
            >

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
                                <Animated.View key={data?.id} style={{ position: "absolute", bottom: 0, transform: [{ translateX: posicao }], display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: data?.color, padding: 10, borderRadius: 10 }} >
                                    <View>
                                        <Image source={data?.img} style={{ width: 40, height: 40, alignSelf: 'center' }} />
                                    </View>
                                    <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled={true} style={{ display: "flex", marginLeft: 5, marginRight: 5 }}>
                                        <View style={{ width: 214, marginRight: 2 }}>
                                            <Text style={{ color: "#ffff", fontSize: 13, marginLeft: 5 }}>{data?.musica}</Text>
                                            <Text style={{ color: "#ffff", fontSize: 13, marginLeft: 5 }}>{data?.nome}</Text>
                                        </View>
                                    </ScrollView>
                                    <View style={{ display: "flex", flexDirection: "row" }}>
                                        <MaterialCommunityIcons name="cellphone-sound" size={30} style={{ color: "#ffff", marginRight: 8 }} />
                                        <MaterialCommunityIcons name="cards-heart-outline" size={30} style={{ color: "#ffff", marginRight: 8 }} />
                                        <IconEntypo name="controller-play" size={30} style={{ color: "#ffff" }} />
                                    </View>
                                </Animated.View>
                            )
                        })
                    }
                </View>

            </LinearGradient>

        </SafeAreaView>
    );
}

export default Home;
import { Animated, BackHandler, Dimensions, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import Header from '../view/header';
import Mixes from '../view/mixes';
import Feito from '../view/feito';
import Estacoes from '../view/estacoes';
import Play from '../view/play';

const { height } = Dimensions.get("window")

const Home = () => {

    const [color, setColor] = useState("")
    const [data, setData] = useState([])
    const [status, setStatus] = useState(false)
    const [dataStatus, setDataStatus] = useState(true)
    const [posicao] = useState(new Animated.Value(500))

    function Animacao() {

        setStatus(true)
        setDataStatus(false)

        setTimeout(() => {
            Animated.timing(
                posicao,
                {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true
                },
            ).start()
        }, 600)
    }

    const EsconderConteudo = () => {

        setDataStatus(true)
        setStatus(false)

        Animated.timing(
            posicao,
            {
                toValue: 500,
                duration: 300,
                useNativeDriver: true
            },
        ).start()
    }

    const GetColor = (value) => {
        setColor(value)
    }

    const GetData = (value) => {
        setData(value)
    }




    return (
        <SafeAreaView>
            <LinearGradient
                end={{ x: 0.3, y: 0.2 }}
                colors={[color == "" ? "#1f232aeb" : color, 'black']}
            >
                <ScrollView>
                    {
                        dataStatus &&
                        (
                            <>
                                <Header color={GetColor} data={GetData} animacao={Animacao} />
                                <Mixes />
                                <Feito />
                                <Estacoes />
                            </>
                        )
                    }
                    {
                        status &&
                        (
                            <View>
                                <Animated.View style={[{ marginBottom: 40, transform: [{ translateX: posicao }] }]}>
                                    <Play dados={data} color={color} status={EsconderConteudo} />
                                </Animated.View>
                            </View>
                        )
                    }
                </ScrollView>
            </LinearGradient>
            <StatusBar style="light" />
        </SafeAreaView>
    );
}

export default Home;
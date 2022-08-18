import { Dimensions, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Header from '../view/header';
import Mixes from '../view/mixes';
import Feito from '../view/feito';
import Estacoes from '../view/estacoes';

const { height } = Dimensions.get("window")

const Home = () => {

    const [color, setColor] = useState("")

    const GetColor = (value) => {
        setColor(value)
    }

    return (
        <SafeAreaView>
            <LinearGradient
                end={{ x: 0.3, y: 0.2 }}
                colors={[color == "" ? "#1f232aeb" : color, 'black']}
            >
                <ScrollView>
                    <Header color={GetColor} />
                    <Mixes />
                    <Feito />
                    <Estacoes />
                </ScrollView>
            </LinearGradient>
            <StatusBar style="light" />
        </SafeAreaView>
    );
}

export default Home;
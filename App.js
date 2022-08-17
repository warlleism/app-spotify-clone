import { Dimensions, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Header from './src/view/header';
import Mixes from './src/view/mixes';
import Feito from './src/view/feito';
import Estacoes from './src/view/estacoes';

const { height } = Dimensions.get("window")

export default function App() {

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
    </SafeAreaView>
  );
}


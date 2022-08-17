import { Dimensions, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Header from './src/view/header';
import Mixes from './src/view/mixes';

const { height } = Dimensions.get("window")

export default function App() {

  const [color, setColor] = useState("")

  const GetColor = (value) => {
    setColor(value)
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <LinearGradient
          end={{ x: 0.3, y: 0.2 }}
          colors={[color == "" ? "#1f232aeb" : color, 'black']}
          style={styles.background}
        >
          <Header color={GetColor} />
          <Mixes />
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    height: height * 1.1
  },
});
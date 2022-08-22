import { BackHandler, Dimensions, Image, ScrollView, Text, TouchableOpacity, View, Alert, Animated } from "react-native";
import { useEffect, useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconRepeat from "react-native-vector-icons/Feather";
import IconEntypo from "react-native-vector-icons/Entypo";
import Application from "../../../Application";

const { width } = Dimensions.get("window")
const { height } = Dimensions.get("window")

const Play = (props) => {

    const [posicao, setPosicao] = useState(new Animated.Value(1200))

    const [musicas, setMusicas] = useState(props?.dados)

    useEffect(() => {

        const backAction = () => {
            props.status()
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();

    }, []);


    function Animacao(nome, musica, musicas) {

        const dados = [{ nome: nome, musica: musica }]

        setMusicas(dados)

        Animated.timing(
            posicao,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            },
        ).start();
    }




    return (
        <View>
            {console.log(musicas)}
            <ScrollView>
                <LinearGradient style={{ width: width, padding: 20 }} end={{ x: 0, y: 0.2 }} colors={[props.color, 'black']} >
                    <View>
                        {
                            props?.dados?.map((data) => {
                                return (
                                    <View key={data?.id}>
                                        <View>
                                            <Image source={data?.img} style={{ backfaceVisibility: 0, width: 240, height: 240, alignSelf: 'center', marginTop: 40 }} />
                                        </View>
                                        <View>
                                            <Text style={{ color: "#ffff", fontSize: 18, fontWeight: "700", marginTop: 8 }}>{data?.album}</Text>
                                            <View style={{ display: 'flex', flexDirection: "row", marginTop: 8 }}>
                                                <Image source={data?.img} style={{ width: 20, height: 20, borderRadius: 20, marginRight: 10 }} />
                                                <Text style={{ color: "#ffff" }}>{data.nome}</Text>
                                            </View>
                                            <Text style={{ color: "#ffff", marginTop: 8 }}>Álbum  • {data?.data}</Text>
                                        </View>

                                        <View style={{ alignItems: "center", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>

                                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                <Application />
                                                <TouchableOpacity onPress={() => console.log("teste")}>
                                                    <Text style={{ color: "#ffff", fontSize: 23, marginRight: 10 }}>︙</Text>
                                                </TouchableOpacity>
                                            </View>

                                            <View style={{ alignItems: "center", display: "flex", flexDirection: "row", marginRight: 20 }}>
                                                <TouchableOpacity onPress={() => console.log("teste")}>
                                                    <IconRepeat name="repeat" size={29} style={{ marginRight: 10, color: "#ffff" }} />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => console.log("teste")}>
                                                    <IconAntDesign name="playcircleo" size={38} style={{ color: props.color }} />
                                                </TouchableOpacity>
                                            </View>

                                        </View>

                                        {data.musicas.map((dados) => {
                                            return (
                                                <View key={dados.musica} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
                                                    <View>
                                                        <TouchableOpacity onPress={() => Animacao(data.nome, dados.musica, dados.musica)}>
                                                            <Text style={{ color: "#ffff", fontSize: 18 }}>{dados.musica}</Text>
                                                            <Text style={{ color: "#ffff", fontSize: 13 }}>{data.nome}</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <TouchableOpacity onPress={() => console.log("Teste")}>
                                                        <Text style={{ color: "#ffff", fontSize: 23, marginRight: 10 }}>︙</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            )
                                        })}
                                    </View>
                                )
                            })
                        }
                    </View>
                </LinearGradient>
            </ScrollView>


            {
                props?.dados.map((data) => {
                    return (
                        <Animated.View key={data.id} style={{ position: "absolute", bottom: 0, transform: [{ translateX: posicao }], display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: data.color, padding: 10, borderRadius: 10 }} >
                            <View>
                                <Image source={data?.img} style={{ width: 40, height: 40, alignSelf: 'center' }} />
                            </View>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled={true} style={{ display: "flex", marginLeft: 5, marginRight: 5 }}>
                                {musicas.map((dados) => {
                                    return (
                                        <View key={dados.musica} style={{ width: 214, marginRight: 2 }}>
                                            <Text style={{ color: "#ffff", fontSize: 13, marginLeft: 5 }}>{dados.musica}</Text>
                                            <Text style={{ color: "#ffff", fontSize: 13, marginLeft: 5 }}>{data.nome}</Text>
                                        </View>
                                    )
                                })}
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







            <TouchableOpacity onPress={() => props.status()} style={{ marginTop: 50, position: "absolute" }}>
                <IconAntDesign name="left" size={20} style={{ textAlign: "center", elevation: 9, backgroundColor: "#7171716e", marginLeft: 10, color: '#ffff', paddingVertical: 10, paddingHorizontal: 11, borderRadius: 50 }} />
            </TouchableOpacity>

        </View>
    );
}

export default Play;
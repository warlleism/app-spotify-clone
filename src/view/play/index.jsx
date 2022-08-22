import { BackHandler, Dimensions, Image, ScrollView, Text, TouchableOpacity, View, Alert, Animated, ImageComponent } from "react-native";
import { useEffect, useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconRepeat from "react-native-vector-icons/Feather";
import Application from "../../../Application";

const { width } = Dimensions.get("window")

const Play = (props) => {

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

    function EscolherMusica(imagem, nome, musica, id, color) {
        props.musicas([{ img: imagem, nome: nome, musica: musica, id: id, color: color }])
    }

    return (
        <View>
            <ScrollView style={{marginBottom: 20}}>
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
                                                <View key={dados?.musica} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
                                                    <View>
                                                        <TouchableOpacity onPress={() => EscolherMusica(data?.img, data?.nome, dados?.musica, data?.id, data?.color)}>
                                                            <Text style={{ color: "#ffff", fontSize: 18 }}>{dados?.musica}</Text>
                                                            <Text style={{ color: "#ffff", fontSize: 13 }}>{data?.nome}</Text>
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

            <TouchableOpacity onPress={() => props.status()} style={{ marginTop: 50, position: "absolute" }}>
                <IconAntDesign name="left" size={20} style={{ textAlign: "center", elevation: 9, backgroundColor: "#7171716e", marginLeft: 10, color: '#ffff', paddingVertical: 10, paddingHorizontal: 11, borderRadius: 50 }} />
            </TouchableOpacity>

        </View>
    );
}

export default Play;
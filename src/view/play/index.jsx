import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import IconEvilIcons from "react-native-vector-icons/EvilIcons";

const { height } = Dimensions.get("window")
const { width } = Dimensions.get("window")

const Play = (props) => {

    return (
        <View style={{ position: "relative" }}>
            <ScrollView>
                <LinearGradient style={{ width: width, height: height + 100, padding: 20 }} end={{ x: 0, y: 0.2 }} colors={[props.color, 'black']} >
                    <View>
                        {
                            props?.dados?.map((data) => {
                                return (
                                    <View key={data?.id}>
                                        <View>
                                            <Image source={data?.img} style={{ width: 170, height: 170, alignSelf: 'center', marginTop: 40 }} />
                                        </View>
                                        <View>
                                            <Text style={{ color: "#ffff", fontSize: 18, fontWeight: "700", marginTop: 8 }}>{data?.album}</Text>
                                            <View style={{ display: 'flex', flexDirection: "row", marginTop: 8 }}>
                                                <Image source={data?.img} style={{ width: 20, height: 20, borderRadius: 20, marginRight: 10 }} />
                                                <Text style={{ color: "#ffff" }}>{data.nome}</Text>
                                            </View>
                                            <Text style={{ color: "#ffff", marginTop: 8 }}>Álbum  • {data?.data}</Text>
                                        </View>

                                    </View>
                                )
                            })
                        }
                    </View>
                </LinearGradient>
            </ScrollView>
            <TouchableOpacity onPress={() => props.status()} style={{ marginTop: 50, position: "absolute" }}>
                <IconEvilIcons name="close" size={20} style={{ elevation: 9, backgroundColor: "#7171716e", marginLeft: 10, color: '#ffff', paddingVertical: 10, paddingHorizontal: 9, borderRadius: 50 }} />
            </TouchableOpacity>
        </View>
    );
}

export default Play;
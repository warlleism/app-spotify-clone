import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import IconEvilIcons from "react-native-vector-icons/EvilIcons";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconIonicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = (props) => {

    const navigation = useNavigation()

    const tocadasRecentemente = [
        {
            img: require("../../../imagens/periphery/Peripheryi.jpg"),
            dsc: "Periphery I",
            color: "#092f3f99"
        },
        {
            img: require("../../../imagens/slipknot/iowa.jpg"),
            dsc: "Iowa",
            color: "#09093f99"
        },
        {
            img: require("../../../imagens/periphery/Peripheryii.jpg"),
            dsc: "Periphery II",
            color: "#7212129e"
        },
        {
            img: require("../../../imagens/periphery/Peripheryiii.jpg"),
            dsc: "Periphery III",
            color: "#55540c9e"
        },
        {
            img: require("../../../imagens/gorija/from-mars-to-sirius.jpg"),
            dsc: "From Mars To Sirius",
            color: "#e9e3dd9e"
        },
        {
            img: require("../../../imagens/periphery/Peripheryiv.jpg"),
            dsc: "Periphery IV",
            color: "#606060"
        },
        {
            img: require("../../../imagens/polaris/the-death-of-me.jpg"),
            dsc: "The Death Of Me",
            color: "#36688fcc"
        },
    ]
    return (
        <SafeAreaView style={{ width: "100%" }}>
            <View style={{ marginTop: 50, display: 'flex', flexDirection: "row", justifyContent: "space-between", height: 100, alignItems: 'center' }}>
                <View style={{ width: "65%" }}>
                    <Text style={{ textAlign: 'center', color: "#ffff", fontSize: 23, fontWeight: "900" }}>Tocados recentem...</Text>
                </View>
                <View style={{ width: "35%", display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Novidades")}>
                        <IconIonicons name="notifications-outline" size={32} style={{ color: '#ffff' }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Recente")}>
                        <IconMaterialCommunityIcons name="progress-clock" size={32} style={{ color: '#ffff' }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log("teste")}>
                        <IconEvilIcons name="gear" size={32} style={{ color: '#ffff' }} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    tocadasRecentemente.map((data) => {
                        return (
                            <TouchableOpacity onPress={() => props.color(data.color)} key={data.dsc} style={{ width: 130, height: 180, marginLeft: 10, marginRight: 10 }}>
                                <Image source={data.img} style={{ width: "100%", height: 130 }} />
                                <Text style={{ color: "#ffff", fontWeight: "800", marginTop: 6 }}>{data.dsc}</Text>
                            </TouchableOpacity>
                        )
                    })
                }

            </ScrollView>

        </SafeAreaView>

    );
}



export default Header;
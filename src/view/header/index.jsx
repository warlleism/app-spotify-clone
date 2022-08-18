import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import IconEvilIcons from "react-native-vector-icons/EvilIcons";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconIonicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = (props) => {

    const navigation = useNavigation()

    const tocadasRecentemente = [
        {
            id: 1,
            img: require("../../../imagens/periphery/Peripheryi.jpg"),
            album: "Periphery I",
            nome: "Periphery",
            color: "#0a516e",
            data: "2012"
        },
        {
            id: 2,
            img: require("../../../imagens/slipknot/iowa.jpg"),
            album: "Iowa",
            nome: "Slipknot",
            color: "#222274",
            data: "2012"
        },
        {
            id: 3,
            img: require("../../../imagens/periphery/Peripheryii.jpg"),
            album: "Periphery II",
            nome: "Periphery",
            color: "#551919",
            data: "2012"
        },
        {
            id: 4,
            img: require("../../../imagens/periphery/Peripheryiii.jpg"),
            album: "Periphery III",
            nome: "Periphery",
            color: "#ab833a",
            data: "2012"
        },
        {
            id: 5,
            img: require("../../../imagens/gorija/from-mars-to-sirius.jpg"),
            album: "From Mars To Sirius",
            nome: "Gojira",
            color: "#b7b2ac",
            data: "2012"
        },
        {
            id: 6,
            img: require("../../../imagens/periphery/Peripheryiv.jpg"),
            album: "Periphery IV",
            nome: "Periphery",
            color: "#606060",
            data: "2012"
        },
        {
            id: 7,
            img: require("../../../imagens/polaris/the-death-of-me.jpg"),
            album: "The Death Of Me",
            nome: "Polaris",
            color: "#36688f",
            data: "2012"
        }
    ]

    const PegarDados = (data) => {
        props.color(data.color)
        props.data([{
            id: data.id,
            img: data.img,
            album: data.album,
            color: data.color,
            data: data.data,
            nome: data.nome
        }])
        props.animacao()
    }


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
                            <>
                                <TouchableOpacity onPress={() => PegarDados(data)} key={data.id} style={{ width: 130, height: 180, marginLeft: 10, marginRight: 10 }}>
                                    <Image source={data.img} style={{ width: "100%", height: 130 }} />
                                    <Text style={{ color: "#ffff", fontWeight: "800", marginTop: 6 }}>{data.album}</Text>
                                </TouchableOpacity>
                            </>
                        )
                    })
                }

            </ScrollView>
        </SafeAreaView>

    );
}



export default Header;
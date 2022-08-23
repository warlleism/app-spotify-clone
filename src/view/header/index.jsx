import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconEvilIcons from "react-native-vector-icons/EvilIcons";
import IconIonicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useContext } from 'react';
import { Context } from '../../../components/provider'

const Header = (props) => {

    const navigation = useNavigation();

    const { tocadas } = useContext(Context);

    const PegarDados = (data) => {
        props.color(data.color);
        props.data([{
            id: data.id,
            img: data.img,
            album: data.album,
            color: data.color,
            data: data.data,
            nome: data.nome,
            musicas: data.musicas
        }]);
        props.animacao();
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

                    <TouchableOpacity onPress={() => navigation.navigate("Configuracoes")}>
                        <IconEvilIcons name="gear" size={32} style={{ color: '#ffff' }} />
                    </TouchableOpacity>

                </View>

            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    tocadas.map((data) => {
                        return (
                            <TouchableOpacity onPress={() => PegarDados(data)} key={data.id} style={{ width: 130, height: 180, marginLeft: 10, marginRight: 10 }}>
                                <Image source={data.img} style={{ width: "100%", height: 130 }} />
                                <Text style={{ color: "#ffff", fontWeight: "800", marginTop: 6 }}>{data.album}</Text>
                            </TouchableOpacity>
                        )
                    })
                }

            </ScrollView>

        </SafeAreaView>
    );
}



export default Header;
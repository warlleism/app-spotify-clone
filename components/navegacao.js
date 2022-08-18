
import Icon from "react-native-vector-icons/AntDesign";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

export default function Navegacao(props) {

    const navigation = useNavigation()
    const { width } = Dimensions.get("window")
    
    return (
        <>
            <LinearGradient style={{ position: "absolute", width: width }} end={{ x: props.x ? props.x : 0.3, y: 0.2 }} colors={["#191c21", 'black']}>
                <View style={{ marginTop: 40, display: props.display ? props.display : "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: props.backgroundColor }}>
                    <TouchableOpacity onPress={() => navigation.navigate(props.route)} >
                        <Icon name={props.icon} size={23} style={{ color: props.color ? props.color : '#000000d1', padding: 10, elevation: 9 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate(props.route)}>
                        <Icon name={props.rightIcon} size={23} style={{ color: props.color ? props.color : '#000000d1', padding: 10 }} />
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </>
    )
}
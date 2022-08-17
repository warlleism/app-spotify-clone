import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const Container = (props) => {


    return (
        <SafeAreaView style={{ width: "100%" }}>
            <View style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between", height: 100, alignItems: 'center' }}>
                <Text style={{ textAlign: 'center', color: "#ffff", fontSize: 23, fontWeight: "900", marginLeft: 20 }}>{props.titulo}</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    props.imagens.map((imagens) => {
                        return (
                            <TouchableOpacity onPress={() => console.log("teste")} key={imagens.dsc} style={{ width: 170, marginLeft: 10, marginRight: 10, position: "relative" }}>
                                <View style={{ borderBottomColor: imagens.borderColor ? imagens.borderColor : "yellow", borderBottomWidth: 4, }}>
                                    <Image source={imagens.img} style={{ width: "100%", height: 160, }} />
                                    {
                                        imagens.nome ? 
                                            <>
                                                <Text
                                                    style={{ position: 'absolute', bottom: "23%", left: 20, color: "#ffff", fontSize: 16, fontWeight: "700" }}>Mix de {imagens.nome}
                                                </Text>
                                            </>
                                            : false
                                    }
                                    {
                                        imagens.nome ?
                                            <Text
                                                style={{ backgroundColor: imagens.borderColor, width: 7, height: 26, position: 'absolute', bottom: "20%", left: 0, color: "#ffff", fontSize: 16, fontWeight: "700" }}
                                            />
                                            : false
                                    }
                                </View>
                                <Text style={{ width: "100%", color: props.color ? props.color : "#ffff", fontWeight: "800", marginTop: 6, fontSize: props.fontSize ? props.fontSize : 13, fontWeight: props.fontWeight ? props.fontWeight : "300" }}>{imagens.dsc}</Text>

                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>

    );
}



export default Container;
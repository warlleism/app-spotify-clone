import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import ExplodingHeart from "./components/ExplodingHeart";


const Application = ({ }) => {
    const [isFavourite, setIsFavourite] = useState(false)

    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: 'center'}}>
            <ExplodingHeart status={isFavourite} onChange={(e) => setIsFavourite(e)} />
            <TouchableOpacity onPress={() => console.log("teste")}>
                <Text style={{ color: "#ffff", fontSize: 23, marginRight: 10 }}>︙</Text>
            </TouchableOpacity>
        </View>

    )

}

export default Application;
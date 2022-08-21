import React, { useState } from 'react'
import { View } from "react-native";
import ExplodingHeart from "./components/ExplodingHeart";


const Application = ({ }) => {
    const [isFavourite, setIsFavourite] = useState(false)

    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: 'center' }}>
            <ExplodingHeart status={isFavourite} onChange={(e) => setIsFavourite(e)} />
        </View>

    )

}

export default Application;
import { Switch } from 'react-native';
import { useState } from 'react';


const SwitchButtom = () => {

    const [habilitar, setHabilitar] = useState(false)

    const alterarSwitch = () => {
        setHabilitar(!habilitar)
    }

    return (
        <Switch
            trackColor={{ false: "#95a5a6", true: "#2c3e50" }}
            thumbColor={habilitar ? "#158fdae3" : "#ffff"}
            onValueChange={alterarSwitch}
            value={habilitar}
        />
    );
}

export default SwitchButtom;
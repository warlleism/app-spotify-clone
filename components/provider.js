import React, { createContext, useState } from 'react';

export const Context = createContext()

export default function Provider({ children }) {
    
    const [tocadas] = useState([
        {
            id: 1,
            img: require("../imagens/periphery/Peripheryi.jpg"),
            album: "Periphery I",
            nome: "Periphery",
            color: "#0a516e",
            data: "2012",
            musicas: [
                { musica: "Insomnia" },
                { musica: "The Walk" },
                { musica: "Letter Experiment" },
                { musica: "Jetpacks Was Yes" },
                { musica: "Light" },
                { musica: "All New Materials" },
                { musica: "Buttersnips" },
                { musica: "Icarus Lives" },
                { musica: "Totla Mad" },
                { musica: "Ow My Feelings" },
                { musica: "Zyglrox" },
                { musica: "Racecar" },
            ]
        },
        {
            id: 2,
            img: require("../imagens/slipknot/iowa.jpg"),
            album: "Iowa",
            nome: "Slipknot",
            color: "#222274",
            data: "2012",
            musicas: [
                { musica: "Left Behind" },
                { musica: "People = Shit" },
                { musica: "The Heretic Anthem" },
                { musica: "My Plagues" },
                { musica: "Disasterpiece" },
                { musica: "Everything Ends" },
                { musica: "New Abortion" },
                { musica: "The Shape" },
                { musica: "Gently" },
                { musica: "I Am Hated" },
                { musica: "Iowa" },
                { musica: "Skin Ticket" },
                { musica: "Metabolic" },
                { musica: "(515)" },
            ]
        },
        {
            id: 3,
            img: require("../imagens/periphery/Peripheryii.jpg"),
            album: "Periphery II",
            nome: "Periphery",
            color: "#551919",
            data: "2012",
            musicas: [
                { musica: "Scarlet" },
                { musica: "Ji" },
                { musica: "MAKE TOTAL DESTROY" },
                { musica: "Ragnarok" },
                { musica: "Have a Blast" },
                { musica: "Muramasa" },
                { musica: "Facepalm Mute" },
                { musica: "The Gods Must Be Crazy!" },
                { musica: "Masamune" },
                { musica: "Erised" },
                { musica: "Luck as a Constant" },
                { musica: "Froggin' Bullfish" },
                { musica: "Mile Zero" },
            ]
        },
        {
            id: 4,
            img: require("../imagens/periphery/Peripheryiii.jpg"),
            album: "Periphery III",
            nome: "Periphery",
            color: "#ab833a",
            data: "2012",
            musicas: [
                { musica: "Marigold" },
                { musica: "Lune" },
                { musica: "The Price is Wrong" },
                { musica: "Ca:h Fire" },
                { musica: "The Way the News Goes..." },
                { musica: "Motormouth" },
                { musica: "Absolomb" },
                { musica: "Prayer Position" },
                { musica: "Flatline" },
                { musica: "Habitual Line-Stepper" },
                { musica: "Remain Indoors" },
            ]
        },
        {
            id: 5,
            img: require("../imagens/gorija/from-mars-to-sirius.jpg"),
            album: "From Mars To Sirius",
            nome: "Gojira",
            color: "#b7b2ac",
            data: "2012",
            musicas: [
                { musica: "Backbone" },
                { musica: "Flying Whales" },
                { musica: "The Heaviest Matter of the Universe" },
                { musica: "From The Sky" },
                { musica: "Ocean Planet" },
                { musica: "Global Warming" },
                { musica: "Where Dragons Dwell" },
                { musica: "From Mars" },
                { musica: "To Sirius" },
                { musica: "In The Wilderness" },
                { musica: "World to Come" },
                { musica: "Unicorn" },
            ]
        },
        {
            id: 6,
            img: require("../imagens/periphery/Peripheryiv.jpg"),
            album: "Periphery IV",
            nome: "Periphery",
            color: "#606060",
            data: "2012",
            musicas: [

                { musica: "Reptile" },
                { musica: "Sentient Glow" },
                { musica: "It's Only Smiles" },
                { musica: "Satellites" },
                { musica: "Garden in the Bones" },
                { musica: "Blood Eagle" },
                { musica: "Crush" },
                { musica: "CHVRCH BVRNER" },
                { musica: "Follow Your Ghost" },
            ]
        },
        {
            id: 7,
            img: require("../imagens/polaris/the-death-of-me.jpg"),
            album: "The Death Of Me",
            nome: "Polaris",
            color: "#36688f",
            data: "2012",
            musicas: [
                { musica: "Pray for Rain" },
                { musica: "Hypermania" },
                { musica: "Masochist" },
                { musica: "Landmine" },
                { musica: "Vagabond" },
                { musica: "Creatures of Habit" },
                { musica: "Above My Head" },
                { musica: "Martyr (Waves)" },
                { musica: "All of This Is Fleeting" },
                { musica: "The Descent" },
            ]
        }
    ])

    return (
        <Context.Provider value={{tocadas}}>
            {children}
        </Context.Provider>
    )

}
import { LinearGradient } from "expo-linear-gradient"
import { View, Text, StyleSheet } from "react-native"


export interface EnunciadoProps {
    enunciado: string
}

const Enunciado = (props: EnunciadoProps) => {
    return (
        <View style={style.container}>
            <LinearGradient colors={['rgba(0, 0, 0, 0.4)', 'transparent']} style={style.background} />
            <Text style={style.text}>{props.enunciado}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        position: "relative",
        alignItems: "center",
        backgroundColor: "#852e9c",
        padding: 20,
        borderRadius: 10,
        margin: 20
        
    },
    background: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
    },
    text: {
        color: "#fff",
        textAlign: "center",
        fontSize: 23,
        fontWeight: "bold",
        opacity: 0.8
    }
})

export default Enunciado
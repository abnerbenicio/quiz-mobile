import { View, Text, StyleSheet } from "react-native"

const Logo = () => {
    return (
        <View>
            <Text style={style.titulo}>SPACE QUIZ</Text>
            <Text style={style.subtitulo}>Perguntas de Outro Mundo!</Text>
        </View>
    )
}

const style = StyleSheet.create({
    titulo: {
        fontFamily: "SOLARSPACEDEMO-Regular",
        color: "#fff",
        fontSize: 35,
        textAlign: "center"
    },

    subtitulo: {
        fontFamily: "SPACEMISSION",
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
        paddingHorizontal: 5,
    }
})

export default Logo
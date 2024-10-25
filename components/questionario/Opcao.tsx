import { Pressable, StyleSheet, Text } from "react-native"

export interface OpcaoProps {
    indice: number,
    texto: string
    onPress: () => void
}

const Opcao = (props: OpcaoProps) => {
    return (
        <Pressable style={styles.container} onPress={props.onPress}>
            <Text style={styles.texto}>{props.texto}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2e9d48",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 50,
        width: 450
    },
    texto: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold"
    }
})

export default Opcao
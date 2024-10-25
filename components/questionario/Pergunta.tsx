import { View, Text } from "react-native"
import PropTypes from 'prop-types';
import PerguntaModel from "@/data/model/Pergunta"
import Enunciado from "./Enunciado";
import Opcao from "./Opcao";

export interface PerguntaProps {
    pergunta: PerguntaModel,
}

const Pergunta = (props: PerguntaProps) => {
    return (
        <View style={{gap: 20}}>
            <Enunciado enunciado={props.pergunta.enunciado}/>
            <View style={{gap: 15, alignItems: "center"}}>
                {props.pergunta.opcoes.map((opcao, idx) => (
                    <Opcao key={idx} indice={idx} texto={opcao} onPress={()=>null}/>
                ))}
            </View>
        </View>
    )
}

export default Pergunta
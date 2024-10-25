import Pergunta from "@/components/questionario/Pergunta";
import Logo from "@/components/template/Logo";
import Pagina from "@/components/template/Pagina";
import perguntas from "@/data/constants/perguntas";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {

  return (
    <Pagina>
      <View style={{gap: 40}}>
        <Logo />
        <Pergunta pergunta={perguntas[0]}/>
      </View>
      
    </Pagina>
    
  );
}


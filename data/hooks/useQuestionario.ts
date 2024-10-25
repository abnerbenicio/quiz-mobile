import { useState } from "react";
import TodasPerguntas from "@/data/constants/perguntas";

const useQuestionario = () => {
  const sortearPerguntas = () => {
    const perguntasEmbaralhadas = [...TodasPerguntas]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
    return perguntasEmbaralhadas;
  };

  const [perguntas, setPerguntas] = useState(sortearPerguntas());
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [respostas, setResposta] = useState<number[]>([]);

  return {
    get pergunta() {
      return perguntas[indicePergunta];
    },
    get pontuacao() {
      return perguntas
        .map((p) => p.resposta)
        .map((r, idx) => r === respostas[idx])
        .filter(Boolean).length;
    },
    get totalDePerguntas() {
      return perguntas.length;
    },
    get concluido() {
      return indicePergunta === perguntas.length;
    },
    responder(resposta: number) {
      setResposta([...respostas, resposta]);
      setIndicePergunta(indicePergunta + 1);
    },
    reiniciar() {
      setIndicePergunta(0);
      setResposta([]);
      setPerguntas(sortearPerguntas);
    },
  };
};

export default useQuestionario;

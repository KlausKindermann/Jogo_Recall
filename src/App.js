import { useState } from "react"
import styled from "styled-components"
import Logo from "./Logo"
import Cores from "./style/Cores"
import itensPergunta from "./ItensPergunta";
import Carta from "./Carta"

export default function App() {

    const { verde, amarelo, vermelho, cinza } = Cores
    const [aberta, setAbrir] = useState(null)
    const [virar, setVirar] = useState(null)
    const [respondidas, setRespondidas] = useState([])

    function responderPergunta (respondeu) {
        if (aberta !== null && aberta === virar) {
            const newArray = [...respondidas, { index: aberta, respondeu: respondeu }]
            setRespondidas(newArray)
            setAbrir(null)
        }
    }
    function getCardStatus(i) {
        const carta = respondidas.find((a) => a.index === i)
        if (carta !== null && carta !== undefined) {
            return carta.respondeu
        } else {
            return "sem resposta"
        }
    }

    return (
        <ScreenContainer>
            <Logo />
            {itensPergunta.map((c, i) => (
                <Carta
                    key={i}
                    numero={i + 1} s
                    abrirCarta={() => setAbrir(i)}
                    virada={i === aberta}
                    question={c.question}
                    answer={c.answer}
                    respondeu={getCardStatus(i)}
                    verResposta={() => setVirar(i)}
                    virar={i === virar}
                />
            ))}
            <FooterContainer>
                <ButtonsContainer>
                    <ChoiceButton data-text="zap-btn" cor={verde} onClick={() => responderPergunta("acertou")}>Zap!</ChoiceButton>
                    <ChoiceButton data-text="partial-btn" cor={amarelo} onClick={() => responderPergunta("quase")}>Quase não lembrei</ChoiceButton>
                    <ChoiceButton data-text="no-btn" cor={vermelho} onClick={() => responderPergunta("errou")}>Não lembrei</ChoiceButton>
                </ButtonsContainer>
                {respondidas.length}/8 concluidos
            </FooterContainer>
        </ScreenContainer>
    )
}

const FooterContainer = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`
const ButtonsContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
`
const ChoiceButton = styled.button`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: ${props => props.cor};
    border-radius: 5px;
    border: 1px solid ${props => props.color};
    padding:5px;
`
const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`